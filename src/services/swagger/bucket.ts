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
