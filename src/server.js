const server = require("express");
app = server();

app.get("/", (req, resp) => {
  return resp.json("A API está funcionando!");
});

app.post("/users", (req, resp) => {
  return resp;
});

app.listen(3333);
