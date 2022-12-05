// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 新增腾讯云账号 POST /api/tencent-cloud-account */
export async function addTencentCloudAccount(
  body: API.CreateTencentCloudAccountDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/tencent-cloud-account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
