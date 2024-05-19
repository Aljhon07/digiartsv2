export function getURL() {
  const url = document.location.hash.split("#")[1];
  const params = url.split("/");

  return {
    origURL: document.location,
    url,
    baseParams: params[1],
    params,
  };
}
