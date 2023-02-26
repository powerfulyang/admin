// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除资源 DELETE /api/asset */
export async function deleteAsset(
  body: {
    id?: number;
    ids?: number[];
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/asset', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/asset/${param0} */
export async function AssetControllerSaveAssetToBucket(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AssetControllerSaveAssetToBucketParams,
  body: API.UploadAssetsDto,
  options?: { [key: string]: any },
) {
  const { bucketName: param0, ...queryParams } = params;
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.Asset[]>(`/api/asset/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/asset/pHash/distance */
export async function AssetControllerPHashMap(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/asset/pHash/distance', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取所有资源 POST /api/asset/query-assets */
export async function queryAssets(body: API.QueryAssetsDto, options?: { [key: string]: any }) {
  return request<any>('/api/asset/query-assets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/asset/sync */
export async function AssetControllerSyncAllFromCos(options?: { [key: string]: any }) {
  return request<any>('/api/asset/sync', {
    method: 'GET',
    ...(options || {}),
  });
}
