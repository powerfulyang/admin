// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/bucket */
export async function BucketControllerListAllBuckets(options?: { [key: string]: any }) {
  return request<API.CosBucket[]>('/api/bucket', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/bucket */
export async function BucketControllerCreateNewBucket(
  body: API.CreateBucketDto,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/bucket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/bucket/backup/${param0} */
export async function BucketControllerBackup(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.BucketControllerBackupParams,
  options?: { [key: string]: any },
) {
  const { accountId: param0, ...queryParams } = params;
  return request<Record<string, any>[]>(`/api/bucket/backup/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
