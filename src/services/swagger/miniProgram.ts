// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/mini-program/login */
export async function MiniProgramControllerCode2Session(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.MiniProgramControllerCode2SessionParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/mini-program/login', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/mini-program/qrcode */
export async function MiniProgramControllerGetUnlimitedQRCode(options?: { [key: string]: any }) {
  return request<any>('/api/mini-program/qrcode', {
    method: 'GET',
    ...(options || {}),
  });
}
