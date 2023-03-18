// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 订阅推送 POST /api/web-push/subscribe */
export async function webPushSubscribe(
  body: API.PushSubscriptionJSON,
  options?: { [key: string]: any },
) {
  return request<API.PushSubscriptionLog>('/api/web-push/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
