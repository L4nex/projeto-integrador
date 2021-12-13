  const express = require("express");
const router = express.Router();
const usersService = require('../service/usersService');

// Rota para criar um novo usuário
router.post("/user", async function (req, res) {
    const user = req.body.user;
    const newUser = await usersService.createUser(user);
    res.json({ message: "Usuário criado com sucesso!", id: newUser.id })
  });
  
  // Rota para alterar dados do usuário
  router.put("/user/:id", async function (req, res) {
    const idUser = req.params.id;
    const user = req.body.user;
    const updateUser = await usersService.updateUser(user, idUser);
    res.json({ message: "Usuário editado com sucesso!" });
    res.json(updateUser);
  });

  // Rota para deletar um usuário
  router.delete("/user/:id", async function (req, res) {
    const idUser = req.params.id;
    await usersService.deleteUser(idUser);
    res.json({ message: "Usuário deletado com sucesso!", id: idUser });
  });
  
  // Rota para mostrar um usuário
  router.get("/user/:id", async function (req, res) {

    try {
      const idUser = req.params.id;
      const user = await usersService.showUser(idUser);
      if (user != "") {
        return res.json(user);
      } else {
        return res.json({ error: "Usuário não encontrado", id: idUser });
      }
    } catch (e) {}
    
  });

  // Rota para listar todos os usuários
  router.get("/users", async function (req, res) {
    const users = await usersService.listUsers();
    return res.json(users);
  });
  
  module.exports = router;