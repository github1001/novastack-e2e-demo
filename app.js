const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const environment = process.env.APP_ENV || "local";

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.json({
    service: "novastack-e2e-demo",
    environment,
    status: "ok"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.listen(port, () => {
  console.log(
    `novastack-e2e-demo running on port ${port}`
  );
});
