const express = require("express");
const router = express.Router();
const beatsService = require('../service/beatsService');

// Rota para listar todas as batidas
router.get("/batidas", async function (req, res) {
  const beats = await beatsService.listBeats();
  return res.json(beats);
});

module.exports = router;