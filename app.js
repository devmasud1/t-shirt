// document.getElementById("deleteBtn").addEventListener("click", function () {
//   const textBox = document.getElementById("textBox").value;
//   textBox.value = "";
//   if (textBox.toLowerCase() === "delete") {
//     console.log("item deleted");
//   } else {
//     console.log("try again");
//   }

// });

// document.getElementById("deleteBtn").addEventListener("click", function () {
//   const title = document.getElementById("title").innerText;

//   document.getElementById("textBox").addEventListener("keyup", function (e) {
//   const inputText = e.target.value;
//   console.log(inputText)
//   const deleteBtn = document.getElementById("deleteBtn");

//   if(inputText === title){
//     console.log("delete")
//     // deleteBtn.removeAttribute('disabled');

// }
// else{
//   console.log("delete nooooo")

// }
// });

// });

document.getElementById("addBtn").addEventListener("click", function () {
  const userInput = document.getElementById("textBox2");
  const userInputField = userInput.value;


  const listItem = document.createElement("h2");
  listItem.textContent = userInputField;
  listItem.id = "itemId";
  listItem.style.color = "red";
  const title = document.getElementById("title");
  title.appendChild(listItem);

  userInput.value = "";
});

document.getElementById("textBox").addEventListener("keyup", function (e) {
  const inputText = e.target.value;
  const deleteBtn = document.getElementById("deleteBtn");

  const itemId = document.getElementById("itemId").innerText;

  if (inputText === itemId) {
    deleteBtn.removeAttribute("disabled");

    document.getElementById("deleteBtn").addEventListener("click", function () {
      removeRepository();
      e.target.value = "";
    });
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
});

function removeRepository() {
  document.getElementById("itemId").innerText = "";
}
