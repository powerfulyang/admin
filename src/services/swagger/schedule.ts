// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 手动触发定时任务 GET /api/schedule/${param0} */
export async function triggerSchedule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.triggerScheduleParams,
  options?: { [key: string]: any },
) {
  const { scheduleType: param0, ...queryParams } = params;
  return request<string>(`/api/schedule/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
