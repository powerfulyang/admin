// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/fcm/subscribe */
export async function FcmControllerSubscribe(options?: { [key: string]: any }) {
  return request<any>('/api/fcm/subscribe', {
    method: 'POST',
    ...(options || {}),
  });
}
