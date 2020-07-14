export const getParameterByName = (name, findIn = window.location.href) => {
  var match = RegExp("[?&]" + name + "=([^&]*)").exec(findIn);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};
