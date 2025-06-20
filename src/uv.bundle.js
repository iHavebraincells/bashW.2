self.UVHandler = { handleRequest: req => fetch(req) };
self.UV = { config: self.__uv$config, handler: self.UVHandler };
