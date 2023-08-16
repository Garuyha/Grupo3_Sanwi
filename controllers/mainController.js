const mainController = {
  home: (req, res) => {
    res.render('home');
  },
  login: (req, res) => {
    res.render('users/login');
  },
  register: (req, res) => {
    res.render('users/register');
  },
  billing: (req, res) => {
    res.render('billing');
  },
  productDetail: (req, res) => {
    res.render('products/product-detail');
  },
  productsCart: (req, res) => {
    res.render('products/products-cart');
  },
  redirect: (req, res) => {
    res.redirect('home');
  }
}

module.exports = { mainController }

