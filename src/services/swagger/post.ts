// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/post */
export async function PostControllerCreatePost(
  body: API.CreatePostDto,
  options?: { [key: string]: any },
) {
  return request<API.Post>('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文章 DELETE /api/post/${param0} */
export async function deletePost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePostParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/post/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /api/post/${param0} */
export async function PostControllerUpdatePost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.PostControllerUpdatePostParams,
  body: API.PatchPostDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.Post>(`/api/post/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
