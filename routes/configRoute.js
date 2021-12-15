const express = require("express");
const config = require("nodemon/lib/config");
const router = express.Router();
const configService = require('../service/configService');

// Rota para criar uma nova configuração
router.post("/config", async function (req, res) {
    const config = req.body.user;
    const newConfig = await configService.createConfig(config);
    res.json({ message: "Configuração criada com sucesso!", id: newConfig.id })
});

// Rota para listar todos os usuários
router.get("/configs", async function (req, res) {
  const configs = await configService.listConfig();
  return res.json(configs);
});

module.exports = router;
  