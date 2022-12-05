// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/random/avatar */
export async function RandomControllerGetAvatar(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RandomControllerGetAvatarParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/random/avatar', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
