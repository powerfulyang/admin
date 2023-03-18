export const isChildApplicationPath = () => {
  const { pathname } = window.location;
  if (pathname.startsWith('/system')) {
    return true;
  }
  //
  return false;
};
