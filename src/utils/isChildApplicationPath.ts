export const isChildApplicationPath = () => {
  const { pathname } = window.location;
  if (pathname.startsWith('/admin/system')) {
    return true;
  }
  //
  return false;
};
