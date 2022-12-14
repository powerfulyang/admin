import { EditUserModal, EditUserModalAtom } from '@/pages/User/List/EditUserModal';
import { queryUsers } from '@/services/swagger/userManage';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Typography } from 'antd';
import { useAtom } from 'jotai';
import moment from 'moment';
import { useRef } from 'react';

const UserList = () => {
  const [, setId] = useAtom(EditUserModalAtom);
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
      title: 'option',
      valueType: 'option',
      fixed: 'right',
      width: 'auto',
      render: (_, record) => [
        <Typography.Link
          key="editable"
          onClick={() => {
            setId(record.id);
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
        request={async (params) => {
          const res = await queryUsers({
            data: params,
          });
          return {
            data: res[0],
            success: true,
            total: res[1],
          };
        }}
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
