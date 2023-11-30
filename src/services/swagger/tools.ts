// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /api/tools/ocr */
export async function ToolsControllerOcr(body: API.OCRDto, options?: { [key: string]: any }) {
  return request<string>('/api/tools/ocr', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/tools/video-downloader/cookies */
export async function readCookies(options?: { [key: string]: any }) {
  return request<string>('/api/tools/video-downloader/cookies', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /api/tools/video-downloader/cookies */
export async function saveCookies(
  body: {
    cookies?: string;
  },
  options?: { [key: string]: any },
) {
  return request<any>('/api/tools/video-downloader/cookies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
