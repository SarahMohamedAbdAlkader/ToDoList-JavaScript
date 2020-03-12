
$("table").before('<img style="height:10%;width:10%;" id="theImg" src="add.png" />');
let btn = document.createElement('button');
	btn.innerHTML='edit'
	btn.className='edit'

var person = function (name, email, phone) {
  this.Name = name;
    this.Email = email;
    this.id = Math.floor(Math.random() * 100),
        this.Phone = phone
}

var obj = {};
Object.defineProperty(person, 'id', { writable: false })

var contactList = {
    arrayOne: [],
}; 
$(document).ready(function () {

    $("#submit").click(function (event) {
        
        event.preventDefault();
        //var input = new person();
        var arr = []
        $("input").each(function () {
            contact = $(this).val()
            if (contact == "") { console.log($(this).next().css("display", "block")) }
            else {
                $(this).next().css("display", "none")    
            }
        })

       
        addContact(contact);
        console.log(contactList.arrayOne);
        $('.images').each(function(i){
            $(this).click(function (e) {
                console.log(e.target.id)
                id=e.target.id;
                for (var prop in contactList.arrayOne) {
                id=contactList.arrayOne[prop].id ;
                ($(this).parent().parent().remove())
                    getContact(id);
                    $('input:first').val(contactList.arrayOne[prop].Name);
                    $('input:eq(1)').val(contactList.arrayOne[prop].Email);
                    $('input:last').val(contactList.arrayOne[prop].Phone);  
                 updateObjectById(id,contactList.arrayOne[0])
                
                }
                
               
        })
        
        
    })
    $('.images2').each(function(){
        $(this).click(function (e) {
            console.log(e.target.id)
            id=e.target.id;
            for (var prop in contactList.arrayOne){
            if(id==contactList.arrayOne[prop].id );
                    { console.log("Herrrr")
                    console.log(contactList.arrayOne[prop])
                   var replay= prompt("Are you sure?")
                   if( replay=="y")
                    {($(this).parent().parent().remove())
                     }}
                    }
                 })
            
           
})

        $("form").submit(); 
        
       
    })
      
        $('img').click(function () {
            $("form")[0].reset();
    })
    


})

function getContact(id) {
    console.log("hh")
    for (var prop in contactList.arrayOne) {
      if (contactList.arrayOne[prop].id === id) {
          console.log("here2")
        console.log(contactList.arrayOne[prop]);
      }
    }
  };
function addContact(contact) {
if(contact!= ""){
    contact = new person();
    contact.id = Math.floor(Math.random() * 100)
    contact.Name = $('input:first').val();
    firstLetter = contact.Name.charAt(0);
    var result = firstLetter + contact.Name.substr(contact.Name.indexOf(' '));
    contact.Name = result.replace(/ /, ".");
    contact.Email = $('input:eq(1)').val();
    contact.Phone = $('input:last').val();
    if (contact.Phone.length > 11) { console.log($(this).next().css("display", "block")); alert("enter phone just 11 numbers only") }
      
    //contactList.arrayOne[0] = contact.Name;
    contactList.arrayOne.push(contact) 
    var newRow = $('<tr><td></td><td></td><td></td><td></td></tr>');
    var cols = newRow.children();
    
    cols.eq(0).text(contact.Name);
    cols.eq(1).text(contact.Email);
    cols.eq(2).text(contact.Phone);
    newRow.appendTo('tbody');
   console.log( $(newRow).find("td:nth-child(4)").append('<img height=8%,width=9% class="images2" src="delete.png" />').find("img").css({"padding": "5px"}).attr('id',contact.id))
   console.log( $(newRow).find("td:nth-child(4)").append('<img height=6%,width=4% class="images" src="editing.png" />').find("img").css({"padding": "5px"}).attr('id',contact.id))
}
}

updateObjectById = function (id, obj){
    for (var i = 0, l = contactList.arrayOne.length; i < l; i++) {
       if (contactList.arrayOne[i].id == id) {
        for(var key in obj){
        contactList.arrayOne[i][key] = obj[key];
        }
    }
}
};
var getAllContacts = function()
{
        console.log(contactList.arrayOne);
      
    };
    

