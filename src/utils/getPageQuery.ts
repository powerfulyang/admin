import { history } from '@umijs/max';

export const getPageQuery = (field: string) => {
  const fields = new URLSearchParams(history.location.search);
  return fields.get(field);
};
