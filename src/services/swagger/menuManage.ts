// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建菜单 POST /api/menu-manage */
export async function createMenu(body: API.Menu, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/menu-manage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑菜单 PATCH /api/menu-manage */
export async function editMenu(body: API.Menu, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/menu-manage', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据id获取菜单 GET /api/menu-manage/${param0} */
export async function queryMenuById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMenuByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Menu>(`/api/menu-manage/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据id删除菜单 DELETE /api/menu-manage/${param0} */
export async function deleteMenuById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteMenuByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/menu-manage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取所有菜单 GET /api/menu-manage/query-all-menus */
export async function queryAllMenus(options?: { [key: string]: any }) {
  return request<API.Menu[]>('/api/menu-manage/query-all-menus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页获取菜单 GET /api/menu-manage/query-menus */
export async function queryMenus(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryMenusParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/menu-manage/query-menus', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
