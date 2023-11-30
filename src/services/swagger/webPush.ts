// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 发送推送 POST /api/web-push/send-notification */
export async function webPushSendNotification(
  body: API.NotificationDto,
  options?: { [key: string]: any },
) {
  return request<any>('/api/web-push/send-notification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 订阅推送 POST /api/web-push/subscribe */
export async function webPushSubscribe(
  body: API.PushSubscriptionJSONDto,
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

/** 订阅推送列表 POST /api/web-push/subscribe/list */
export async function webPushSubscribeList(
  body: API.PaginatedBaseQuery,
  options?: { [key: string]: any },
) {
  return request<any>('/api/web-push/subscribe/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
