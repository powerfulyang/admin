// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 分页查询请求日志 POST /api/request-log-manage/query-logs */
export async function queryLogs(body: API.QueryRequestLogDto, options?: { [key: string]: any }) {
  return request<(API.RequestLog[] | number)[]>('/api/request-log-manage/query-logs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
