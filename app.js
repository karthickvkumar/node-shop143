const express = require('express');
const app = express();
const Joi = require('@hapi/joi');

//app.use(express.json());
app.use(function (req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
   express.json();
});

let productList = [
   {
      id: "product-0",
      name: "Nikon D5600 DSLR Camera",
      highlight: "Effective Pixels: 24.2 MP, Sensor Type: CMOS, WiFi Available, 1080p recording at 30p",
      retial_price: "66450",
      offer_percent: '24',
      images: [
         {
            url: "https://raw.githubusercontent.com/karthickvkumar/ngo/master/camera.png"
         },
         {
            url: "https://raw.githubusercontent.com/karthickvkumar/ngo/master/camera.png"
         }
      ],
      description: "DK- 25 Rubber Eyecup, BF - 1B Body Cap, EN - EL14a Rechargeable Li - ion Battery(with Terminal Cover), AN - DC3 Strap, MH - 24 Battery Charger(Plug Adapter Supplied in Countries or Regions where Required, Shape Depends on Country of Sale)",
      in_stock: "10"
   },
   {
      id: "product-1",
      name: "Apple iPhone 11",
      highlight: "128 GB ROM,15.49 cm(6.1 inch) Liquid Retina HD Display, 12MP + 12MP | 12MP Front Camera,A13 Bionic Chip Processor",
      retial_price: "73600",
      offer_percent: '0',
      images: [
         {
            url: "https://raw.githubusercontent.com/karthickvkumar/ngo/master/smartphone.png"
         },
         {
            url: "https://raw.githubusercontent.com/karthickvkumar/ngo/master/smartphone%20(1).png"
         }
      ],
      description: "The iPhone 11 features dual 12 MP Ultra Wide (13mm) and Wide (26mm) cameras with 4K video recording up to 60 fps. The Ultra Wide camera provides 120° field of view, letting you capture four times more scene, and the Wide camera provides 100% Focus Pixels for up to three times faster autofocus in low light.",
      in_stock: "0"
   },
];

let mobileProducts = [
   {
      id: 101,
      name: "Samsung Galaxy s5",
      image: "https://i.ibb.co/Hpzbb2g/product-1.jpg",
      discount_price: "$899.00",
      actual_price: "$650.00"
   },
   {
      id: 102,
      name: "Nokia Lumia 650",
      image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
      discount_price: "$499.00",
      actual_price: "$799.00"
   },
   {
      id: 103,
      name: "LG Optimist G-10",
      image: "https://i.ibb.co/mSWQZCL/product-3.jpg",
      discount_price: "$550.00",
      actual_price: "$899.00"
   },
   {
      id: 104,
      name: "Sony Xperia Z pro",
      image: "https://i.ibb.co/7WHm756/product-4.jpg",
      discount_price: "$799.00",
      actual_price: "$1099.00"
   },
];

let productDetailDescription = [
   {
      id: 101,
      name: "Samsung Galaxy s5",
      image: "https://i.ibb.co/Hpzbb2g/product-1.jpg",
      discount_price: "$899.00",
      actual_price: "$650.00",
      category: "Smartphone",
      tags: ["awesome", "best", "sale", "shoes"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero."
   },
   {
      id: 102,
      name: "Nokia Lumia 650",
      image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
      discount_price: "$499.00",
      actual_price: "$799.00",
      category: "Smartphone",
      tags: ["awesome", "best", "sale", "shoes"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero."
   },
   {
      id: 103,
      name: "LG Optimist G-10",
      image: "https://i.ibb.co/mSWQZCL/product-3.jpg",
      discount_price: "$550.00",
      actual_price: "$899.00",
      category: "Smartphone",
      tags: ["awesome", "best", "sale", "shoes"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero."
   },
   {
      id: 104,
      name: "Sony Xperia Z pro",
      image: "https://i.ibb.co/7WHm756/product-4.jpg",
      discount_price: "$799.00",
      actual_price: "$1099.00",
      category: "Smartphone",
      tags: ["awesome", "best", "sale", "shoes"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero."
   },
   {
      id: 105,
      name: "iPhone 10",
      image: "https://i.ibb.co/K9nX5Fc/product-5.jpg",
      discount_price: "$950.00",
      actual_price: "$1200.00",
      category: "Smartphone",
      tags: ["awesome", "best", "sale", "shoes"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero."
   }
];

let allProducts = [
   {
      id: 101,
      name: "Samsung Galaxy s5",
      image: "https://i.ibb.co/Hpzbb2g/product-1.jpg",
      discount_price: "$899.00",
      actual_price: "$650.00"
   },
   {
      id: 102,
      name: "Nokia Lumia 650",
      image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
      discount_price: "$499.00",
      actual_price: "$799.00"
   },
   {
      id: 103,
      name: "LG Optimist G-10",
      image: "https://i.ibb.co/mSWQZCL/product-3.jpg",
      discount_price: "$550.00",
      actual_price: "$899.00"
   },
   {
      id: 104,
      name: "Sony Xperia Z pro",
      image: "https://i.ibb.co/7WHm756/product-4.jpg",
      discount_price: "$799.00",
      actual_price: "$1099.00"
   },
   {
      id: 105,
      name: "iPhone 10",
      image: "https://i.ibb.co/K9nX5Fc/product-5.jpg",
      discount_price: "$950.00",
      actual_price: "$1200.00"
   },
   {
      id: 101,
      name: "Samsung Galaxy s5",
      image: "https://i.ibb.co/Hpzbb2g/product-1.jpg",
      discount_price: "$899.00",
      actual_price: "$650.00"
   },
   {
      id: 102,
      name: "Nokia Lumia 650",
      image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
      discount_price: "$499.00",
      actual_price: "$799.00"
   },
   {
      id: 103,
      name: "LG Optimist G-10",
      image: "https://i.ibb.co/mSWQZCL/product-3.jpg",
      discount_price: "$550.00",
      actual_price: "$899.00"
   },
   {
      id: 104,
      name: "Sony Xperia Z pro",
      image: "https://i.ibb.co/7WHm756/product-4.jpg",
      discount_price: "$799.00",
      actual_price: "$1099.00"
   },
   {
      id: 105,
      name: "iPhone 10",
      image: "https://i.ibb.co/K9nX5Fc/product-5.jpg",
      discount_price: "$950.00",
      actual_price: "$1200.00"
   },
   {
      id: 101,
      name: "Samsung Galaxy s5",
      image: "https://i.ibb.co/Hpzbb2g/product-1.jpg",
      discount_price: "$899.00",
      actual_price: "$650.00"
   },
   {
      id: 102,
      name: "Nokia Lumia 650",
      image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
      discount_price: "$499.00",
      actual_price: "$799.00"
   },
   {
      id: 103,
      name: "LG Optimist G-10",
      image: "https://i.ibb.co/mSWQZCL/product-3.jpg",
      discount_price: "$550.00",
      actual_price: "$899.00"
   },
   {
      id: 104,
      name: "Sony Xperia Z pro",
      image: "https://i.ibb.co/7WHm756/product-4.jpg",
      discount_price: "$799.00",
      actual_price: "$1099.00"
   },
   {
      id: 105,
      name: "iPhone 10",
      image: "https://i.ibb.co/K9nX5Fc/product-5.jpg",
      discount_price: "$950.00",
      actual_price: "$1200.00"
   },
   {
      id: 102,
      name: "Nokia Lumia 650",
      image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
      discount_price: "$499.00",
      actual_price: "$799.00"
   },
];

let preview = {
   topSelling: [
      {
         name: "Nokia Lumia 650",
         image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
         discount_price: "$499.00",
         actual_price: "$799.00"
      },
      {
         name: "LG Optimist G-10",
         image: "https://i.ibb.co/mSWQZCL/product-3.jpg",
         discount_price: "$550.00",
         actual_price: "$899.00"
      },
      {
         name: "Sony Xperia Z pro",
         image: "https://i.ibb.co/7WHm756/product-4.jpg",
         discount_price: "$799.00",
         actual_price: "$1099.00"
      }
   ],
   recentlyViewed: [
      {
         name: "Sony Xperia Z pro",
         image: "https://i.ibb.co/7WHm756/product-4.jpg",
         discount_price: "$799.00",
         actual_price: "$1099.00"
      },
      {
         name: "Nokia Lumia 650",
         image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
         discount_price: "$499.00",
         actual_price: "$799.00"
      },
      {
         name: "LG Optimist G-10",
         image: "https://i.ibb.co/mSWQZCL/product-3.jpg",
         discount_price: "$550.00",
         actual_price: "$899.00"
      }
   ],
   topNew: [
      {
         name: "iPhone 10",
         image: "https://i.ibb.co/K9nX5Fc/product-5.jpg",
         discount_price: "$950.00",
         actual_price: "$1200.00"
      },
      {
         name: "Samsung Galaxy s5",
         image: "https://i.ibb.co/Hpzbb2g/product-1.jpg",
         discount_price: "$899.00",
         actual_price: "$650.00"
      },
      {
         name: "Nokia Lumia 650",
         image: "https://i.ibb.co/WfGNDDy/product-2.jpg",
         discount_price: "$499.00",
         actual_price: "$799.00"
      }
   ]
};


app.get('/api/status', (req, res) => {
   res.send('Server is Up and Running')
});

app.get('/api/products', (req, res) => {
   res.send(productList);
});

app.get('/telebuy/api/products', (req, res) => {
   res.send(allProducts);
});

app.get('/telebuy/api/products/latest', (req, res) => {
   res.send(mobileProducts);
});

app.get('/telebuy/api/product/preview', (req, res) => {
   res.send(preview);
});

app.get('/api/product/:id', (req, res) => {
   const product = productList.find(product => product.id == req.params.id);
   if (!product) {
      res.status(400).send('The product with given ID is not Found');
      return;
   }
   res.send(product);
});

app.get('/telebuy/api/product/:id', (req, res) => {
   const product = productDetailDescription.find(product => product.id == req.params.id);
   if (!product) {
      res.status(400).send('The product with given ID is not Found');
      return;
   }
   res.send(product);
});

app.post('/api/product/add', (req, res) => {
   let { error } = validate(req.body);
   if (error) {
      res.status(400).send(error.details[0].message);
      return;
   }
   let newProduct = {
      id: "product-" + productList.length,
      name: req.body.name,
      highlight: req.body.highlight,
      retial_price: req.body.retial_price,
      offer_percent: req.body.offer_percent,
      images: req.body.images,
      description: req.body.description,
      in_stock: req.body.in_stock
   }
   productList.push(newProduct);
   res.send(newProduct);
});

app.put('/api/product/:id', (req, res) => {
   const product = productList.find(product => product.id == req.params.id);
   if (!product) {
      res.status(400).send('The product with given ID is not Found');
      return;
   }

   let { error } = validate(req.body);
   if (error) {
      res.status(400).send(error.details[0].message);
      return;
   }
   product.name = req.body.name;
   product.highlight = req.body.highlight;
   product.retial_price = req.body.retial_price;
   product.offer_percent = req.body.offer_percent;
   product.images = req.body.images;
   product.description = req.body.description;
   product.in_stock = req.body.in_stock;
   res.send(product);
});

app.delete('/api/product/:id', (req, res) => {
   const productId = productList.findIndex(product => product.id == req.params.id);
   if (productId < 0) {
      res.status(400).send('The product with given ID is not Found');
      return;
   }
   productList.splice(productId, 1);
   res.send("The product with give ID is deleted")
})

function validate(product) {
   const schema = Joi.object({
      name: Joi.string()
         .min(3)
         .max(30)
         .required(),
      highlight: Joi.string()
         .min(3)
         .required(),
      retial_price: Joi.string()
         .min(1)
         .required(),
      offer_percent: Joi.string()
         .min(1)
         .required(),
      images: Joi.array()
         .required()
         .items(Joi.object({
            url: Joi.string()
               .min(3)
               .required()
         })),
      description: Joi.string()
         .min(3)
         .required(),
      in_stock: Joi.string()
         .min(1)
         .required(),
   });
   return schema.validate(product);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT);