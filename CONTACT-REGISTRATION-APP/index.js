
var contacts=[];
var headers=["NAME","DOB","EMAIL","PHONE NUMBER","CITY"];

function validateAndCreateContact(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var city = document.getElementById("city").value;
    var type = document.getElementById("addbtn").value;

    console.log(name);
    if(name == null || name == ''){
        alert("Invalid input name");
        return;
    }
    if(age == 0){
        alert("Invalid input dob");
        return;
    }
    if(email == null || email == ''){
        alert("Invalid input email");
        return;
    }
    if(number == null || number == ''){
        alert("Invalid input phone number");
        return;
    }
    if(city == null || city == ''){
        alert("Invalid input city");
        return;
    }

    var newContact = [];
    newContact.push(name);
    newContact.push(age);
    newContact.push(email);
    newContact.push(number);
    newContact.push(city);
    if(type=="Update"){
        var index = document.getElementById("indexValue").value;
        contacts[index]=newContact;
        clearCancel();
    }else{
        contacts.push(newContact); 
    }
    
    console.log(contacts);
    if(contacts.length==1 && type!="Update"){
        displayContacts(true);
    }else{
        displayContacts(false);
    }
    clearInput();

}

function displayContacts(isFirstTime) {
    var table;
   
        var myTableDiv = document.getElementById("displayContacts");
        if(isFirstTime){
            table = document.createElement('TABLE');
            
        }else{
            var oldTable=document.getElementById("myTable");
            oldTable.remove();
            table = document.createElement('TABLE');
        }
        table.setAttribute("id", "myTable");
        table.border='1';
        table.classList.add("table-style");
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < headers.length; i++) {
             var headerCell = document.createElement("TH");
            headerCell.innerHTML = headers[i];
            row.appendChild(headerCell);
        }
    

     //Add the data rows.
     for (var i = 0; i < contacts.length; i++) {
        innerRow = table.insertRow(-1);
        var contactData = contacts[i];
        for(var j=0;j<contactData.length;j++){
            var cell = innerRow.insertCell(-1);
            cell.innerHTML = contactData[j];
            innerRow.appendChild(cell);
        }
        var delCell = innerRow.insertCell(-1);
        delCell.innerHTML = '<input type="submit" value="Delete" onclick="return deleteContact(this)">';
        innerRow.appendChild(delCell);
        var updateCell = innerRow.insertCell(-1);
        updateCell.innerHTML = '<input type="submit" value="Update" onclick="return updateContact(this)">';
        innerRow.appendChild(updateCell);
    }

    myTableDiv.appendChild(table);
    
}
function deleteContact(x){
    var rowData = x.parentNode.parentNode;
    index=rowData.rowIndex - 1;
    console.log("Index is :"+index);
    contacts.splice(index, 1);
    if(contacts.length==0){
        var oldTable=document.getElementById("myTable");
            oldTable.remove();
    }else{
        displayContacts(false);
    }
}

function updateContact(x){
    var rowData = x.parentNode.parentNode;
    index=rowData.rowIndex - 1;
    var rowData = x.parentNode.parentNode;
    document.getElementById("name").value=rowData.cells[0].innerHTML;
    document.getElementById("age").value=rowData.cells[1].innerHTML;
    document.getElementById("email").value=rowData.cells[2].innerHTML;
    document.getElementById("number").value=rowData.cells[3].innerHTML;
    document.getElementById("city").value=rowData.cells[4].innerHTML;
    document.getElementById("canclebtn").classList.add("button-cancle-visable");
    document.getElementById("addbtn").value="Update"
    document.getElementById("indexValue").value=index;
    
}

function clearInput(){
    document.getElementById("name").value='';
    document.getElementById("age").value='';
    document.getElementById("email").value='';
    document.getElementById("number").value='';
    document.getElementById("city").value='';
}

function clearCancel(){
    clearInput();
    document.getElementById("canclebtn").classList.remove("button-cancle-visable");
    document.getElementById("addbtn").value="Add"
}
