// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 分页查询日志 GET /api/post-manage/query-posts */
export async function queryPosts(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryPostsParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/post-manage/query-posts', {
    method: 'GET',
    params: {
      ...params,
      bucket: undefined,
      ...params['bucket'],
      objectUrl: undefined,
      ...params['objectUrl'],
      exif: undefined,
      ...params['exif'],
      metadata: undefined,
      ...params['metadata'],
      size: undefined,
      ...params['size'],
      uploadBy: undefined,
      ...params['uploadBy'],
      timelineBackground: undefined,
      ...params['timelineBackground'],
    },
    ...(options || {}),
  });
}
