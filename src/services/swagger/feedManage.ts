// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除说说 DELETE /api/feed-manage/${param0} */
export async function deleteFeedById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFeedByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/feed-manage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询说说 GET /api/feed-manage/query-feeds */
export async function queryFeeds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryFeedsParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/feed-manage/query-feeds', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
