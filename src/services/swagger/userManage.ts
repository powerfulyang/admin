// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 分页查询用户列表 POST /api/user-manage/query-users */
export async function queryUsers(options?: { [key: string]: any }) {
  return request<any>('/api/user-manage/query-users', {
    method: 'POST',
    ...(options || {}),
  });
}
