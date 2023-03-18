import { deleteAsset, queryAssets } from '@/services/swagger/asset';
import type { ProStrictColumns } from '@/types/ProStrictColumns';
import { paginateTableRequest } from '@/utils/tableRequest';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Image, Modal, Typography } from 'antd';
import dayjs from 'dayjs';

const Index = () => {
  const columns: ProStrictColumns<API.Asset>[] = [
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
      title: 'createdAt',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      render(_, __) {
        return dayjs(__.createdAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'updatedAt',
      dataIndex: 'updatedAt',
      valueType: 'dateRange',
      render(_, __) {
        return dayjs(__.updatedAt).format('YYYY-MM-DD HH:mm:ss');
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
