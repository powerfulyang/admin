// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 分页查询所有文章 POST /api/post-manage/query-post */
export async function queryPost(body: API.PaginateQueryPostDto, options?: { [key: string]: any }) {
  return request<any>('/api/post-manage/query-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
