/*global Ultraviolet*/
self.__uv$config = {
  prefix: "/bashW.2/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/bashW.2/uv/uv.handler.js",
  client: "/bashW.2/uv/uv.client.js",
  bundle: "/bashW.2/uv/uv.bundle.js",
  config: "/bashW.2/uv/uv.config.js",
  sw: "/bashW.2/uv/uv.sw.js",
};
