import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});
