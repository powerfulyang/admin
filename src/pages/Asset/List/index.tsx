import { PageContainer, ProTable } from '@ant-design/pro-components';
import type { ProColumnDetectType } from '@/types/ProColumnDetectType';
import { paginateTableRequest } from '@/utils/paginateTableRequest';
import { deleteAsset, queryAssets } from '@/services/swagger/asset';
import moment from 'moment';
import { Image, Modal, Typography } from 'antd';

const Index = () => {
  const columns: ProColumnDetectType<API.Asset>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'sha1',
      dataIndex: 'sha1',
    },
    {
      title: 'originUrl',
      dataIndex: 'originUrl',
    },
    {
      title: 'preview',
      hideInSearch: true,
      render: (_, record) => {
        return (
          <Image
            preview={{
              src: record.objectUrl.webp,
            }}
            height={50}
            src={record.objectUrl.thumbnail_300_}
          />
        );
      },
    },
    {
      title: 'tags',
      dataIndex: 'tags',
      hideInSearch: true,
      renderText: (text) => text.join(','),
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
      render: (_, record) => [
        <Typography.Link
          key="delete"
          type="danger"
          onClick={() => {
            Modal.confirm({
              title: 'Delete Asset',
              content: 'Are you sure to delete this asset?',
              onOk: async () => {
                await deleteAsset({
                  id: record.id,
                });
                return true;
              },
            });
          }}
        >
          Delete
        </Typography.Link>,
      ],
    },
  ];
  return (
    <PageContainer title={false}>
      <ProTable
        rowKey="id"
        headerTitle="Asset List"
        columns={columns}
        scroll={{ x: 'max-content' }}
        request={paginateTableRequest(queryAssets)}
      />
    </PageContainer>
  );
};

export default Index;
