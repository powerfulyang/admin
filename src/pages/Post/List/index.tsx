import type { ActionType } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Image, Modal, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { paginateTableRequest } from '@/utils/tableRequest';
import type { ProStrictColumns } from '@/types/ProStrictColumns';
import { queryPosts } from '@/services/swagger/postManage';
import { deletePost } from '@/services/swagger/post';

const Index = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProStrictColumns<API.Post>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'title',
      dataIndex: 'title',
    },
    {
      title: 'summary',
      dataIndex: 'summary',
      hideInTable: true,
    },
    {
      title: 'content',
      dataIndex: 'content',
      hideInTable: true,
    },
    {
      dataIndex: ['poster', 'id'],
      title: 'poster',
      render: (_, record) => {
        return (
          <Image
            preview={{
              src: record.poster.objectUrl.webp,
            }}
            height={30}
            src={record.poster.objectUrl.thumbnail_300_}
          />
        );
      },
    },
    {
      title: 'tags',
      dataIndex: 'tags',
      hideInSearch: true,
      render: (_, record) => {
        return record.tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        });
      },
    },
    {
      title: 'public',
      dataIndex: 'public',
      valueEnum: {
        true: {
          text: 'true',
          color: 'green',
        },
        false: {
          text: 'false',
          color: 'gray',
        },
      },
    },
    {
      title: 'createBy',
      dataIndex: ['createBy', 'nickname'],
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      valueType: 'dateTimeRange',
      render: (_, record) => {
        return dayjs(record.createdAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'updatedAt',
      dataIndex: 'updatedAt',
      valueType: 'dateTimeRange',
      render: (_, record) => {
        return dayjs(record.updatedAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'Action',
      valueType: 'option',
      width: 'auto',
      fixed: 'right',
      render(_, record) {
        return [
          <Typography.Link
            onClick={() => {
              Modal.confirm({
                title: 'Delete',
                content: 'Are you sure to delete this post?',
                onOk: async () => {
                  await deletePost({
                    id: record.id,
                  });
                  actionRef.current?.reload();
                },
              });
            }}
            type="danger"
            key="delete"
          >
            Delete
          </Typography.Link>,
        ];
      },
    },
  ];
  return (
    <PageContainer title={false}>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        headerTitle="Post List"
        columns={columns}
        scroll={{ x: 'max-content' }}
        request={paginateTableRequest(queryPosts)}
      />
    </PageContainer>
  );
};

export default Index;
