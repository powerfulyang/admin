// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 DELETE /api/asset */
export async function AssetControllerDeleteAsset(options?: { [key: string]: any }) {
  return request<any>('/api/asset', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/asset/${param0} */
export async function AssetControllerSaveAssetToBucket(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.AssetControllerSaveAssetToBucketParams,
  body: API.UploadFilesDto,
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

  return request<any>(`/api/asset/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/asset/pHash/distance */
export async function AssetControllerPHashMap(options?: { [key: string]: any }) {
  return request<any>('/api/asset/pHash/distance', {
    method: 'GET',
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
