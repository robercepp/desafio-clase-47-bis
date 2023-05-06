import { opine, json, urlencoded } from "./dependencies/dep.tsx";
import router from "./routes/index.routes.tsx";

const PORT = 8080;

const app = opine();
app.use(json()); // for parsing application/json
app.use(urlencoded());
app.use(router);

console.log(`El servidor se está ejecutando en el puerto: ${PORT}`);
await app.listen({ port: PORT });
