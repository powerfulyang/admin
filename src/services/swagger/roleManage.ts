// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建角色 POST /api/role-manage */
export async function createRole(body: API.CreateRoleDto, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/role-manage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新角色 PATCH /api/role-manage */
export async function updateRole(body: API.CreateRoleDto, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/role-manage', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询角色详情 GET /api/role-manage/${param0} */
export async function queryRoleById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryRoleByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Role>(`/api/role-manage/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除角色 DELETE /api/role-manage/${param0} */
export async function deleteRoleById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteRoleByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/role-manage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取用户权限 GET /api/role-manage/permissions */
export async function listPermissions(options?: { [key: string]: any }) {
  return request<Record<string, any>[]>('/api/role-manage/permissions', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 分页查询角色 GET /api/role-manage/query-roles */
export async function queryRoles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryRolesParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/role-manage/query-roles', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
