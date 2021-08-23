/**
 * Both Search and Product service now neeed a ProductRepository, with similar functionality
 * Therefor the base is abstracted to commercetools-products package
 */

export class ProductDatasource {

    static getProducts() {
        return [{
            id: 123456,
            name: "Some product"
        },{
            id: 123456,
            name: "Another product"
        }];
    }

    static queryProducts() {
        return [{
            id: 123456,
            name: "Some product"
        },{
            id: 123456,
            name: "Another product"
        }];
    }
}