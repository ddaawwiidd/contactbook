describe("Contact book", function(){
	
	var page = require('./page/home_page.js');
	
	//input data
	var name = ['Vladimir', 'Barack', 'Xi', 'Han', 'Clark'];
	var surname = ['Putin', 'Obama', 'Lao', 'Solo', 'Kent'];
	var email = ['ilovekgb@ivan.ru', 'theboss@whitehouse.us', 'xilao@madeinchina.ch', 'chewy@falcon.space', 'superman@kryptonite.space'];
	var phone = ['+01 1234 567', '+02 1356 776', 'none', 'none', 'none'];
	
	beforeEach(function(){
		browser.ignoreSynchronization = true;
		browser.get("https://ddaawwiidd.github.io/contactbook/");
	});
	
	it("Should be able to save new contact", function(){
		page.fillForm(name[0], surname[0], email[0], phone[0]);
		page.clickSave();
		page.clearForm();
		page.fillForm(name[0], surname[0], email[0], phone[0]);
		page.clickSearch();
		expect(page.getResult(1,1)).toBe(name[0]);
		expect(page.getResult(1,2)).toBe(surname[0]);
		expect(page.getResult(1,3)).toBe(email[0]);
		expect(page.getResult(1,4)).toBe(phone[0]);
	});
	
	it("Should be able to search for saved contact", function(){
		page.clearForm();
		page.fillForm(name[0], surname[0], email[0], phone[0]);
		page.clickSearch();
		expect(page.getResult(1,1)).toBe(name[0]);
		expect(page.getResult(1,2)).toBe(surname[0]);
		expect(page.getResult(1,3)).toBe(email[0]);
		expect(page.getResult(1,4)).toBe(phone[0]);
	});
	
	it("Should be able to edit contact details", function(){
		page.clearForm();
		page.fillForm(name[0], surname[0], email[0], phone[0]);
		page.clickSearch();
		page.clickEdit(1);
		page.clearForm();
		page.fillForm(name[0], surname[0], 'ilovehacking@putin.ru', phone[0]);
		page.clickSave();
		page.clearForm();
		page.fillForm(name[0], surname[0]);
		page.clickSearch();
		expect(page.getResult(1,1)).toBe(name[0]);
		expect(page.getResult(1,2)).toBe(surname[0]);
		expect(page.getResult(1,3)).toBe('ilovehacking@putin.ru');
		expect(page.getResult(1,4)).toBe(phone[0]);
	});
	
	it("Should be able to remove contact", function(){
		page.clearForm();
		page.fillForm(name[0]);
		page.clickSearch();
		page.clickRemove(1);
		page.clearForm();
		page.clickSearch();
		expect(page.getEmpty()).toEqual('');
	});
	
	it("Should be able to list all saved contacts", function(){
		page.clearForm();
		//generate 4 entries
		for(var i = 0; i < 4; i++){
			page.fillForm(name[i], surname[i], email[i], phone[i]);
			page.clickSave();
			page.clearForm();
		};
		page.clearForm();
		page.clickSearch();
		expect(page.getResult(1,1).isDisplayed()).toBe(true);
		expect(page.getResult(2,1).isDisplayed()).toBe(true);
		expect(page.getResult(3,1).isDisplayed()).toBe(true);
		expect(page.getResult(4,1).isDisplayed()).toBe(true);
	});
	
	it("Should be able to delete localStorage", function(){
		page.clickDeleteLocalStorage();	
		page.clickSearch();
		expect(page.getEmpty()).toEqual('');
	});
	
});


