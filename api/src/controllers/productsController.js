const productsService = require(`../services/productsService`);

module.exports = {
  listar: async (req, res) => {
    let json = { error: "", result: [] };

    let products = await productsService.listar();

    for (let i in products) {
      json.result.push({
        code: products[i].code,
        name: products[i].name,
        cost_price: products[i].cost_price,
        sales_price: products[i].sales_price,
      });
    }
    res.json(json);
  },

  product: async (req, res) => {
    let json = { error: "", result: {} };

    let code = req.params.code;
    let product = await productsService.product(code);

    if (product) {
      json.result = product;
    }
    res.json(json);
  },

  insert: async (req, res) => {
    let json = { error: "", result: {} };

    let code = req.body.code;
    let name = req.body.name;
    let cost_price = req.body.cost_price;
    let sales_price = req.body.sales_price;

    if (code && name && cost_price && sales_price) {
      let Product = await productsService.insert(
        code,
        name,
        cost_price,
        sales_price
      );
      json.result = {
        product: Product,
        code,
        name,
        cost_price,
        sales_price,
      };
    } else {
      json.error = "Campos não enviados";
    }
    res.json(json);
  },
};
