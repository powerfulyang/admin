// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取公开的图片资源 GET /api/public/asset */
export async function infiniteQueryPublicAsset(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infiniteQueryPublicAssetParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/public/asset', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取单个公开的图片资源 GET /api/public/asset/${param0} */
export async function getPublicAssetById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicAssetByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Asset>(`/api/public/asset/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/public/chat */
export async function PublicControllerChat(options?: { [key: string]: any }) {
  return request<any>('/api/public/chat', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取所有的公开时间线 GET /api/public/feed */
export async function queryPublicTimeline(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryPublicTimelineParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/public/feed', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** hello ping GET /api/public/hello */
export async function hello(options?: { [key: string]: any }) {
  return request<string>('/api/public/hello', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取所有的公开文章列表 GET /api/public/post */
export async function queryPublicPosts(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryPublicPostsParams,
  options?: { [key: string]: any },
) {
  return request<API.Post[]>('/api/public/post', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取单个文章详细信息 GET /api/public/post/${param0} */
export async function getPublicPostById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPublicPostByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Post>(`/api/public/post/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 获取所有的公开文章的标签列表 GET /api/public/post/tags */
export async function queryPublicPostTags(options?: { [key: string]: any }) {
  return request<any>('/api/public/post/tags', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取所有的公开文章的年份列表 GET /api/public/post/years */
export async function queryPublicPostYears(options?: { [key: string]: any }) {
  return request<number[]>('/api/public/post/years', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/public/view-count */
export async function PublicControllerViewCount(options?: { [key: string]: any }) {
  return request<API.ViewCountDto[]>('/api/public/view-count', {
    method: 'GET',
    ...(options || {}),
  });
}
