var Contacts = {
	contacts: [],
	
	//loads data from local storage on app start
	init: function(){
		if(localStorage.getItem("contact") !==null){
			this.contacts = (JSON.parse(localStorage.getItem("contact")));
		};
	},
	
	//takes data from the form
	takeContact: function(){
		var entry = {
			name: document.getElementById("nameInput").value,
			surname: document.getElementById("surnameInput").value,
			email: document.getElementById("emailInput").value,
			phone: document.getElementById("phoneInput").value
		};
		this.contacts.push(entry);
		Contacts.storeAdd();
	},
	
	//stores data in local storage
	storeAdd: function(){
		localStorage.setItem("contact",JSON.stringify(this.contacts));
	},
	
	//searches for matching contacts
	search: function(){
		var parameter = {
			name: document.getElementById("nameInput").value,
			surname: document.getElementById("surnameInput").value,
			email: document.getElementById("emailInput").value,
			phone: document.getElementById("phoneInput").value
		};
		var print = "";
		for (var i = 0; i < this.contacts.length; i++){
			if(this.contacts[i].name == parameter.name || this.contacts[i].surname == parameter.surname || this.contacts[i].email == parameter.email || this.contacts[i].phone == parameter.phone ){
				print += "<tr><td>"+this.contacts[i].name + "</td><td>" + this.contacts[i].surname + "</td><td>" + this.contacts[i].email + "</td><td>" + this.contacts[i].phone + "</td><td> <input id=\""+i+"\" class='button-primary' type='button' onclick='Contacts.editRecord(\""+i+"\")' value='Edit'> <input id=\""+i+"\" class='button' type='button' value='Remove' onclick='Contacts.removeRecord(\""+i+"\")'>" +"</td></tr>";
			} else if (parameter.name == "" && parameter.surname == "" && parameter.email == "" && parameter.phone == ""){
				print += "<tr><td>"+this.contacts[i].name + "</td><td>" + this.contacts[i].surname + "</td><td>" + this.contacts[i].email + "</td><td>" + this.contacts[i].phone + "</td><td> <input id=\""+i+"\" class='button-primary' type='button' onclick='Contacts.editRecord(\""+i+"\")' value='Edit'> <input id=\""+i+"\" class='button' type='button' value='Remove' onclick='Contacts.removeRecord(\""+i+"\")'>" +"</td></tr>";
			};
		};
		document.getElementById("result").innerHTML = print;
	},
	
	//edits contact
	editRecord: function(record){
		document.getElementById("nameInput").value = this.contacts[record].name;
		document.getElementById("surnameInput").value = this.contacts[record].surname;
		document.getElementById("emailInput").value = this.contacts[record].email;
		document.getElementById("phoneInput").value = this.contacts[record].phone;
		var index = this.contacts.indexOf(this.contacts[record]);
		if(index > -1){
			this.contacts.splice(index,1);
		};
		Contacts.search();
	},
	
	//deletes local storage
	storeRemove: function(){
		localStorage.clear();
		location.reload();
	},
	
	//deletes single contact
	removeRecord: function(record){
		var index = this.contacts.indexOf(this.contacts[record]);
		if(index > -1){
			this.contacts.splice(index,1);
		};
		Contacts.search();
		Contacts.storeAdd();
	}
	
};










