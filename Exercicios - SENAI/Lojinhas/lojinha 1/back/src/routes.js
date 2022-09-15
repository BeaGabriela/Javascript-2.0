const Express = require('express');

const router = Express.Router();

const ProdutosController = require("./controllers/ProdutosController");
const FuncionariosController = require("./controllers/FuncionariosController");

router.get("/produtos", ProdutosController.listarProdutos);
router.get("/produto/:cod", ProdutosController.listaProduto);
router.post("/produtos", ProdutosController.cadastrarProduto);
router.delete("/produto", ProdutosController.excluirProduto);
router.put("/produto", ProdutosController.editarProduto);

router.get("/funcionarios", FuncionariosController.listarfuncionarios);
router.get("/funcionarios/:matricula", FuncionariosController.listarFuncionario);
router.post("/funcionarios", FuncionariosController.cadastrarFunc);
router.delete("/funcionarios", FuncionariosController.excluirFunc);
router.put("/funcionarios", FuncionariosController.editarFunc);

module.exports = router;