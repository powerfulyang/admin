import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Typography } from 'antd';
import { getDefaultStore } from 'jotai';
import {
  SendNotificationModal,
  SendNotificationModalAtom,
} from '@/pages/Notification/SendNotificationModal';
import { webPushSubscribeList } from '@/services/swagger/webPush';
import type { ProStrictColumns } from '@/types/ProStrictColumns';
import { paginateTableRequest } from '@/utils/tableRequest';

const List = () => {
  const columns: ProStrictColumns<API.PushSubscriptionLog>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '关联用户',
      dataIndex: ['user', 'nickname'],
    },
    {
      title: 'endpoint',
      dataIndex: 'endpoint',
      className: 'max-w-[100px]',
      ellipsis: true,
    },
    {
      title: '订阅时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      valueType: 'option',
      fixed: 'right',
      width: 'auto',
      render(_, record) {
        return (
          <Typography.Link
            onClick={() => {
              getDefaultStore().set(SendNotificationModalAtom, record.id);
            }}
          >
            发送通知
          </Typography.Link>
        );
      },
    },
  ];
  return (
    <PageContainer title={false}>
      <ProTable
        rowKey="id"
        headerTitle="通知列表"
        search={false}
        options={false}
        columns={columns}
        scroll={{
          x: 'max-content',
        }}
        request={paginateTableRequest(webPushSubscribeList)}
      />
      <SendNotificationModal />
    </PageContainer>
  );
};

export default List;
