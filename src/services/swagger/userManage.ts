// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 根据用户id获取用户信息 GET /api/user-manage/${param0} */
export async function queryUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUserByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.User>(`/api/user-manage/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据用户id编辑用户信息 POST /api/user-manage/${param0} */
export async function editUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editUserByIdParams,
  body: API.EditUserDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/user-manage/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询用户列表 POST /api/user-manage/query-users */
export async function queryUsers(body: API.QueryUsersDto, options?: { [key: string]: any }) {
  return request<any>('/api/user-manage/query-users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
