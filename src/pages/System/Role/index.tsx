import { EditRoleModal, EditRoleModalAtom } from '@/pages/System/Role/EditRoleModal';
import { queryRoles } from '@/services/swagger/roleManage';
import type { ProColumnDetectType } from '@/types/ProColumnDetectType';
import { paginateTableRequest } from '@/utils/paginateTableRequest';
import type { ActionType } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button, Divider, Space, Typography } from 'antd';
import { useAtom } from 'jotai';
import moment from 'moment';
import { useRef } from 'react';

const Index = () => {
  const [, setId] = useAtom(EditRoleModalAtom);
  const columns: ProColumnDetectType<API.Role>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
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
              onClick={() => {
                setId(__.id);
              }}
            >
              Edit
            </Typography.Link>
            <Divider type="vertical" />
            <Typography.Link type="danger">Delete</Typography.Link>
          </Space>
        );
      },
    },
  ];

  const actionRef = useRef<ActionType>();

  return (
    <PageContainer title={false}>
      <ProTable
        rowKey="id"
        headerTitle="Role List"
        columns={columns}
        scroll={{ x: 'max-content' }}
        request={paginateTableRequest(queryRoles)}
        actionRef={actionRef}
        toolBarRender={() => [
          <Button
            type="primary"
            key="create"
            onClick={() => {
              setId(0);
            }}
          >
            Create Role
          </Button>,
        ]}
      />
      <EditRoleModal
        onOk={() => {
          actionRef.current?.reload();
        }}
      />
    </PageContainer>
  );
};

export default Index;
