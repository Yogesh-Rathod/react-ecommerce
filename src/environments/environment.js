
let API_URL = {};

switch (process.env.REACT_APP_ENV) {
    case 'prod':
        API_URL = {
            bestSeller: `https://ecommerce-application.herokuapp.com/products/getTop20`,
            banners: `https://ecommerce-application.herokuapp.com/products/getBanners`,
            recents: `https://ecommerce-application.herokuapp.com/products/getRecents`,
            categories: `https://ecommerce-application.herokuapp.com/products/getCategories`,
            loginUrl: `https://ecommerce-application.herokuapp.com/users/`,
            productsUrl: `https://ecommerce-application.herokuapp.com/products/cart`,
            shopUrl: `https://ecommerce-application.herokuapp.com/products/getFilterProducts`
        };
        break;
    case 'dev':
        API_URL = {
            bestSeller: `https://api.myjson.com/bins/81wx8`,
            banners: `https://api.myjson.com/bins/rff9g`,
            recents: `https://api.myjson.com/bins/yags4`,
            categories: `https://api.myjson.com/bins/md7uk`,
            shopUrl: `https://api.myjson.com/bins/1axm1k`
        };
        break;

    default:
        break;
}

console.log("API_URL ", API_URL);
export default API_URL;
