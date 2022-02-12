const express = require("express");
const app = express()
var cors = require("cors")
var bodyParser = require("body-parser")

const PORT = process.env.PORT || 8089;
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(cors());
app.use(express.json())
app.use(urlencodedParser)

const clientRoutes = require('./app/routes/clientRoutes.js')

app.get("/", (req, res) => {
  res.json({ message: "Welcome to praveen application." });
});

app.use('/api/v1', clientRoutes);

app.get('*',(req,res)=>{
	res.send("404! Page Not Found....");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




// http://localhost:8089/api/v1/get-client
// http://localhost:8089/api/v1/get-client/13
// http://localhost:8089/api/v1/get-client-setting/13
// http://localhost:8089/api/v1/get-client-app-setting/13
// http://localhost:8089/api/v1/get-client-web-setting/13


// http://localhost:8089/api/v1/update-client-web-setting/13

// {
// 	"enable_order_place_sms_notification":1,
// 	"enable_order_place_email_notification":0
// }


// http://localhost:8089/api/v1/update-client-setting/13

// {
// 	"product_module": 1,
// 	"order_module": 0,
// 	"billing_module": 0,
// 	"transport_module": 1,
//  "payment_module": 1
// }


// http://localhost:8089/api/v1/update-client-app-setting/13


// {
// 	"catalogue_images":1,
// 	"search_images":0,
// 	"category_images":0,
// 	"prod_desc_image":1,
// 	"disable_ordering":0
// }