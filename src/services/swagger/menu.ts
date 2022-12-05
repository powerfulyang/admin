// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取所有菜单 GET /api/menu */
export async function queryAllMenus(options?: { [key: string]: any }) {
  return request<API.Menu[]>('/api/menu', {
    method: 'GET',
    ...(options || {}),
  });
}
