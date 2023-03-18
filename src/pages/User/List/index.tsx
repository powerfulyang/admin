import { EditUserModal, EditUserModalAtom } from '@/pages/User/List/EditUserModal';
import { queryUsers } from '@/services/swagger/userManage';
import { paginateTableRequest } from '@/utils/tableRequest';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Typography } from 'antd';
import dayjs from 'dayjs';
import { getDefaultStore } from 'jotai';
import { useRef } from 'react';

const UserList = () => {
  const columns: ProColumns<API.User>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'nickname',
      dataIndex: 'nickname',
    },
    {
      title: 'bio',
      dataIndex: 'bio',
    },
    {
      title: 'avatar',
      dataIndex: 'avatar',
      valueType: 'avatar',
      hideInSearch: true,
    },
    {
      title: 'lastIp',
      dataIndex: 'lastIp',
      hideInSearch: true,
    },
    {
      title: 'lastAddress',
      dataIndex: 'lastAddress',
      hideInSearch: true,
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
      fixed: 'right',
      width: 'auto',
      render: (_, record) => [
        <Typography.Link
          key="editable"
          onClick={() => {
            getDefaultStore().set(EditUserModalAtom, String(record.id));
          }}
        >
          Edit
        </Typography.Link>,
      ],
    },
  ];

  const actionRef = useRef<ActionType>();

  return (
    <PageContainer>
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        columns={columns}
        scroll={{
          x: 'max-content',
        }}
        request={paginateTableRequest(queryUsers)}
      />
      <EditUserModal
        onOk={() => {
          actionRef.current?.reload();
        }}
      />
    </PageContainer>
  );
};

export default UserList;
