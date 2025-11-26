const express = require("express"); 
const { operationHandlerController, getCodeHandlerController } = require("../controllers/operationHandlerController.js");
const appRouter = express.Router(); 

appRouter.route("/do").post(operationHandlerController)

appRouter.route("/get").get(getCodeHandlerController) 

module.exports = appRouter