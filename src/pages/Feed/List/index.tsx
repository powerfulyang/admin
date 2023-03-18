import { deleteFeedById, queryFeeds } from '@/services/swagger/feedManage';
import type { ProStrictColumns } from '@/types/ProStrictColumns';
import { paginateTableRequest } from '@/utils/tableRequest';
import type { ActionType } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Modal, Typography } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';

const Index = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProStrictColumns<API.Feed>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'content',
      dataIndex: 'content',
    },
    {
      title: 'createBy',
      dataIndex: ['createBy', 'nickname'],
    },
    {
      title: 'creatAt',
      dataIndex: 'createdAt',
      valueType: 'dateTimeRange',
      render: (text, record) => {
        return dayjs(record.createdAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'updatedAt',
      dataIndex: 'updatedAt',
      valueType: 'dateTimeRange',
      render: (text, record) => {
        return dayjs(record.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'Action',
      valueType: 'option',
      render: (text, record) => {
        return (
          <Typography.Link
            type="danger"
            onClick={() => {
              Modal.confirm({
                title: 'Delete',
                content: 'Are you sure to delete this feed?',
                onOk: async () => {
                  await deleteFeedById({
                    id: record.id,
                  });
                  actionRef.current?.reload();
                },
              });
            }}
          >
            Delete
          </Typography.Link>
        );
      },
    },
  ];
  return (
    <PageContainer title={false}>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        headerTitle="Feed List"
        columns={columns}
        scroll={{ x: 'max-content' }}
        request={paginateTableRequest(queryFeeds)}
      />
    </PageContainer>
  );
};

export default Index;
