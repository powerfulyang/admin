// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 分页查询日志 POST /api/post-manage/query-posts */
export async function queryPosts(body: API.QueryPostsDto, options?: { [key: string]: any }) {
  return request<any>('/api/post-manage/query-posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
