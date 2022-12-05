// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /api/logs-viewer/${param0} */
export async function LogsViewerControllerListLogs(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.LogsViewerControllerListLogsParams,
  options?: { [key: string]: any },
) {
  const { container: param0, ...queryParams } = params;
  return request<string[]>(`/api/logs-viewer/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/logs-viewer/containers */
export async function LogsViewerControllerListContainers(options?: { [key: string]: any }) {
  return request<string[]>('/api/logs-viewer/containers', {
    method: 'GET',
    ...(options || {}),
  });
}
