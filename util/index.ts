export const ensureString = (searchParam: string | string[] | undefined) =>
  Array.isArray(searchParam) ? searchParam[0] : searchParam;
