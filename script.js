var firebaseConfig = {
  apiKey: "AIzaSyBmNms6JZ3BCN0gW1709EUkahM_mGSVmLU",
  authDomain: "todoapplication-1918b.firebaseapp.com",
  databaseURL: "https://todoapplication-1918b-default-rtdb.firebaseio.com",
  projectId: "todoapplication-1918b",
  storageBucket: "todoapplication-1918b.appspot.com",
  messagingSenderId: "936331887875",
  appId: "1:936331887875:web:912a10dfa08b7a306f1536"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function RemoveInp(){
    var Listremove = document.getElementById("itemList");
    Listremove.innerHTML="";
}


function addItem() {
  var userInput = document.getElementById("userInput").value;
    var itemList = document.getElementById("itemList");
    var li = document.createElement("li");
    li.innerHTML = userInput;
    

    var editButton = document.createElement("button");
    editButton.innerText = "EDIT";
    editButton.classList.add("Editbtn");
    editButton.onclick = function() {
      var updatedText = prompt("Edit your input:");
      li.innerHTML = updatedText ;
     li.appendChild(editButton);
     li.appendChild(deleteButton);
     
    };
    


    
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.classList.add("Deletebtn");
   
    deleteButton.onclick = function() {
      itemList.removeChild(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    itemList.appendChild(li);
  
  var input= document.getElementById("userInput");
  var obj = {
    input:input.value
  }
 var key = Math.random() * 12345673;
 firebase.database().ref("Userinput/" +Math.round(key)).set(obj)
  }

