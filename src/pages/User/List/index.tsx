import type { ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { queryUsers } from '@/services/swagger/userManage';
import moment from 'moment';

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
      dataIndex: 'createAt',
      valueType: 'dateRange',
      render(_, __) {
        return moment(__.createAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'updatedAt',
      dataIndex: 'updateAt',
      valueType: 'dateRange',
      render(_, __) {
        return moment(__.updateAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable
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
    </PageContainer>
  );
};

export default UserList;
