import type { ProTable } from '@ant-design/pro-components';

export const paginateTableRequest = <T extends Function>(
  func: T,
): Parameters<typeof ProTable<any>>['0']['request'] => {
  return async (params, sort, filter) => {
    const res = await func({ ...params, sort, filter });
    return {
      data: res[0],
      success: true,
      total: res[1],
    };
  };
};

export const listTableRequest = <T extends Function>(
  func: T,
): Parameters<typeof ProTable<any>>['0']['request'] => {
  return async (params, sort, filter) => {
    const res = await func({ ...params, sort, filter });
    return {
      data: res,
    };
  };
};
