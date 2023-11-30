import { PageContainer, ProTable } from '@ant-design/pro-components';
import dayjs from 'dayjs';
import { queryLogs } from '@/services/swagger/requestLogManage';
import type { ProStrictColumns } from '@/types/ProStrictColumns';
import { paginateTableRequest } from '@/utils/tableRequest';

const Logs = () => {
  const columns: ProStrictColumns<API.RequestLog>[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      dataIndex: 'ip',
      title: 'ip',
    },
    {
      dataIndex: 'ipInfo',
      title: 'ipInfo',
    },
    {
      dataIndex: 'path',
      title: 'path',
    },
    {
      dataIndex: 'method',
      title: 'method',
    },
    {
      dataIndex: 'contentLength',
      title: 'contentLength',
    },
    {
      dataIndex: 'processTime',
      title: 'processTime',
    },
    {
      dataIndex: 'referer',
      title: 'referer',
    },
    {
      dataIndex: 'requestId',
      title: 'requestId',
    },
    {
      dataIndex: 'statusCode',
      title: 'statusCode',
    },
    {
      dataIndex: 'userAgent',
      title: 'userAgent',
    },
    {
      dataIndex: 'createdAt',
      title: 'createdAt',
      valueType: 'dateRange',
      render: (_, record) => {
        return dayjs(record.createdAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      dataIndex: 'updatedAt',
      title: 'updatedAt',
      valueType: 'dateRange',
      render: (_, record) => {
        return dayjs(record.createdAt).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  ];

  return (
    <PageContainer>
      <ProTable
        headerTitle="请求日志记录"
        rowKey="id"
        columns={columns}
        request={paginateTableRequest(queryLogs)}
        scroll={{
          x: 'max-content',
        }}
      />
    </PageContainer>
  );
};

export default Logs;
