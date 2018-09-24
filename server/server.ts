import App from "./app";
App.app.listen(4200, () => console.log("servidor rodando, porta:4200"));

process.once("SIGUSR2", () =>
  App.closeDataBaseConnection("nodemon restart", () =>
    process.kill(process.pid, "SIGUSR2")
  )
);

process.on("SIGINT", () =>
  App.closeDataBaseConnection("execução foi interrompida", () =>
    process.exit(0)
  )
);
