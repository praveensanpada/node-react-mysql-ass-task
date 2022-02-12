var conn = require('../config/db');



// ------------------ get api ---------------------------------------

function getClients(req, res) {

    var sql = "SELECT * FROM client";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ success: true, data: result });
    });
}

function getClientById(req, res) {

    var sql = "SELECT * FROM client where id = " + req.params.id;
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ success: true, data: result });
    });
}

function getClientSettingById(req, res) {

    var sql = "SELECT * FROM client_settings where client_id = " + req.params.id;
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ success: true, data: result });
    });
}

function getClientAppSettingById(req, res) {

    var sql = "SELECT * FROM client_app_settings where client_id = " + req.params.id;
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ success: true, data: result });
    });
}

function getClientWebSettingById(req, res) {

    var sql = "SELECT * FROM client_settings_web_app where client_id = " + req.params.id;
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ success: true, data: result });
    });
}

// ------------------ post api ---------------------------------------

function updateClientWebSetting(req, res) {

    const enable_order_place_sms_notification = req.body.enable_order_place_sms_notification;
    const enable_order_place_email_notification = req.body.enable_order_place_email_notification;
    const id = req.params.id;

    conn.query("UPDATE client_settings_web_app SET enable_order_place_email_notification = ?, enable_order_place_sms_notification = ? WHERE client_id = ?", [enable_order_place_email_notification, enable_order_place_sms_notification, id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Done");
        res.send({ success: true, message: 'Web Setting Changed' });
    });
}

function updateClientSetting(req, res) {

    const product_module = req.body.product_module;
    const order_module = req.body.order_module;
    const billing_module = req.body.billing_module;
    const transport_module = req.body.transport_module;
    const payment_module = req.body.payment_module;
    const id = req.params.id;

    conn.query("UPDATE client_settings SET product_module = ?, order_module = ?, billing_module = ?, transport_module = ?, payment_module = ? WHERE client_id = ?", [product_module, order_module, billing_module, transport_module, payment_module, id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Done");
        res.send({ success: true, message: 'Client Setting Changed' });
    });
}

function updateClientAppSetting(req, res) {

    const catalogue_images = req.body.catalogue_images;
    const search_images = req.body.search_images;
    const category_images = req.body.category_images;
    const prod_desc_image = req.body.prod_desc_image;
    const disable_ordering = req.body.disable_ordering;
    const id = req.params.id;

    conn.query("UPDATE client_app_settings SET catalogue_images = ?, search_images = ?, category_images = ?, prod_desc_image = ?, disable_ordering = ? WHERE client_id = ?", [catalogue_images, search_images, category_images, prod_desc_image, disable_ordering, id], (err1, result1) => {
        if (err1) throw err1;
        console.log("Done");
        res.send({ success: true, message: 'App Setting Changed' });
    });
}



module.exports = {
    getClients: getClients,
    getClientById: getClientById,
    getClientSettingById: getClientSettingById,
    getClientAppSettingById: getClientAppSettingById,
    getClientWebSettingById: getClientWebSettingById,
    updateClientWebSetting: updateClientWebSetting,
    updateClientAppSetting: updateClientAppSetting,
    updateClientSetting: updateClientSetting
}
