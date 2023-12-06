
export const removeChannelParamFromUrl = (url: string): string => {
  return url.split('&ab_channel')[0];
}

export const convertToEmbeddedUrl = (url: string): string => {
  return url.replace('watch?v=', 'embed/');
}
