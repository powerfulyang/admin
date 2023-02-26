import { EditMenuModal, EditMenuModalAtom } from '@/pages/System/Menu/EditMenuModal';
import { deleteMenuById, queryMenus } from '@/services/swagger/menuManage';
import { paginateTableRequest } from '@/utils/paginateTableRequest';
import type { ActionType } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Divider, Modal, Space, Typography } from 'antd';
import { useAtom } from 'jotai';
import moment from 'moment';
import type { ProColumnDetectType } from '@/types/ProColumnDetectType';
import { useRef } from 'react';

const Index = () => {
  const actionRef = useRef<ActionType>();
  const [, setId] = useAtom(EditMenuModalAtom);
  const columns: ProColumnDetectType<API.Menu>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'parent menu',
      dataIndex: ['parent', 'name'],
    },
    {
      title: 'path',
      dataIndex: 'path',
    },
    {
      title: 'createAt',
      dataIndex: 'createAt',
      valueType: 'dateRange',
      render(_, __) {
        return moment(__.createAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'updateAt',
      dataIndex: 'updateAt',
      valueType: 'dateRange',
      render(_, __) {
        return moment(__.updateAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'Action',
      valueType: 'option',
      width: 'auto',
      render(_, __) {
        return (
          <Space>
            <Typography.Link
              onClick={(e) => {
                e.stopPropagation();
                setId(__.id);
              }}
            >
              Edit
            </Typography.Link>
            <Divider type="vertical" />
            <Typography.Link
              type="danger"
              onClick={(e) => {
                e.stopPropagation();
                Modal.confirm({
                  title: 'Delete',
                  content: 'Are you sure to delete this menu?',
                  onOk: async () => {
                    await deleteMenuById({
                      id: __.id as unknown as string,
                    });
                    // 重新刷新表格
                    actionRef.current?.reload();
                  },
                });
              }}
            >
              Delete
            </Typography.Link>
          </Space>
        );
      },
    },
  ];

  return (
    <PageContainer title={false}>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        headerTitle="Menu List"
        columns={columns}
        scroll={{ x: 'max-content' }}
        request={paginateTableRequest(queryMenus)}
        expandable={{
          expandRowByClick: true,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="create"
            onClick={() => {
              setId(0);
            }}
          >
            Create Menu
          </Button>,
        ]}
      />
      <EditMenuModal
        onOk={() => {
          // 重新刷新表格
          actionRef.current?.reload();
        }}
      />
    </PageContainer>
  );
};

export default Index;
