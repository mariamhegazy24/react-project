

// server.js
import jsonServer from "json-server";
import auth from "json-server-auth";
import cors from "cors";

const app = jsonServer.create();
const router = jsonServer.router("db.json"); //data file 
const middlewares = jsonServer.defaults();

app.db = router.db; //for auth 

app.use(cors());
app.use(middlewares);
app.use(auth);
app.use(router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(` JSON Server with Auth running on http://localhost:${PORT}`);
});
