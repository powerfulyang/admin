// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/github/user_info/${param0} */
export async function GithubControllerGetUserInfo(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.GithubControllerGetUserInfoParams,
  options?: { [key: string]: any },
) {
  const { login: param0, ...queryParams } = params;
  return request<any>(`/api/github/user_info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
