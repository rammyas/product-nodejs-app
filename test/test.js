var chai = require('chai');

var expect = chai.expect;
var should = chai.should();
var chaiHttp = require('chai-http');
var productservice = require('../src/service/product-service');

chai.use(chaiHttp);
var product = {
    "productId": "110",
    "productName": "Fsports",
    "size": "3",
    "price": 5000000,
    "discount": 0,
    "color": "White",
    "category": "Shoes for men"
}
describe('postProduct()',function(){
	
	it('should post product successfully and return 200',(done)=>{
		chai.request('http://localhost:8080/')  
		.post('product/save/')
		.send(product)
		.end((err, res)=> {
			expect(res).to.have.status(200);
			res.body.should.be.a('object');
			done();
		});
		
	});
});    
describe('getProduct()',function(){
	
	it('should get product successfully',(done)=>{
		chai.request('http://localhost:8080/')  
		.get('product/get/110')    
		.end((err, res)=> {
			expect(res).to.be.json;
			expect(res.body).to.eql(product);
			res.body.should.be.a('object');
			res.body.should.have.property('productName');
			done();
		});
	});
});