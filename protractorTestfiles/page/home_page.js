var HomePage = function(){
	
	//methods
	this.clearForm = function(){
		element(by.css("#nameInput")).clear();
		element(by.css("#surnameInput")).clear();
		element(by.css("#emailInput")).clear();
		element(by.css("#phoneInput")).clear();
	};
	
	this.fillForm = function(name, surname, email, phone){
		element(by.css("#nameInput")).sendKeys(name);
		element(by.css("#surnameInput")).sendKeys(surname);
		element(by.css("#emailInput")).sendKeys(email);
		element(by.css("#phoneInput")).sendKeys(phone);
	};
	
	this.clickSave = function(){
		element(by.css("#saveBTN")).click();
	};
	
	this.clickSearch = function(){
		element(by.css("#searchBTN")).click();
	};
	
	this.getResult = function(row, column){
		return element(by.css("tbody>tr:nth-child("+row+")>td:nth-child("+column+")")).getText();
	};
	
	this.clickEdit = function(row){ 
		element(by.css("input.button-primary:nth-child("+row+")")).click();
	};
	
	this.clickRemove = function(row){
		element(by.css("input.button:nth-child("+row+")")).click();
	};
	
	this.clickDeleteLocalStorage = function(){
		element(by.css("#delAllBTN")).click();
	};
	
	this.getEmpty = function(){
		return element(by.css("#result")).getText();
	};
	
};
module.exports = new HomePage();