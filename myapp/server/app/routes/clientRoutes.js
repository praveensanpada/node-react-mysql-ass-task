const express = require('express');
const router = express.Router();

const clientR = require('../controllers/clientController.js');


router.get("/get-client",clientR.getClients);
router.get("/get-client/:id",clientR.getClientById);
router.get("/get-client-setting/:id",clientR.getClientSettingById);
router.get("/get-client-app-setting/:id",clientR.getClientAppSettingById);
router.get("/get-client-web-setting/:id",clientR.getClientWebSettingById);

router.post("/update-client-web-setting/:id",clientR.updateClientWebSetting);
router.post("/update-client-setting/:id",clientR.updateClientSetting);
router.post("/update-client-app-setting/:id",clientR.updateClientAppSetting);




module.exports = router;