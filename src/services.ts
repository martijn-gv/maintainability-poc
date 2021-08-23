import {ProductDatasource} from "./data-sources/product";

if (process.env.SERVICE === 'product') {

    console.log("PRODUCTS: Starting graphql server");
    ProductDatasource.getProducts();

} else if (process.env.SERVICE === 'search') {

    console.log("SEARCH: Starting HTTP endpoint and waiting for index trigger");
    ProductDatasource.getProducts();

} else {
    throw Error(`Configure a service to start`);
}