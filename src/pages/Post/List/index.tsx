import type { ActionType } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import type { ProColumnDetectType } from '@/types/ProColumnDetectType';
import { paginateTableRequest } from '@/utils/paginateTableRequest';
import { queryPost } from '@/services/swagger/postManage';
import moment from 'moment';
import { Image, Modal, Tag, Typography } from 'antd';
import { useRef } from 'react';
import { deletePost } from '@/services/swagger/post';

const Index = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumnDetectType<API.Post>[] = [
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
      title: 'createAt',
      dataIndex: 'createAt',
      valueType: 'dateTimeRange',
      render: (_, record) => {
        return moment(record.createAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'updateAt',
      dataIndex: 'updateAt',
      valueType: 'dateTimeRange',
      render: (_, record) => {
        return moment(record.updateAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'Action',
      valueType: 'option',
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
        request={paginateTableRequest(queryPost)}
      />
    </PageContainer>
  );
};

export default Index;
