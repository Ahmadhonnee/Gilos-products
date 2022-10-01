const elForm = document.querySelector(".my-form");

const elPhoneBrand = document.querySelector("#productTitle");
const elPhonePrice = document.querySelector("#price");
const elPhoneManufacturer = document.querySelector("#productManufacturer");
const elPhoneBenefits = document.querySelector("#benefits");

const counter = document.querySelector(".counter");
const elTemplate = document.querySelector("#template");
const elMyList = document.querySelector(".myList");

const modalTitle = document.querySelector("#editStudentModalLabel");
const modalBtn = document.querySelector("#modal-btn");
const addModalBtn = document.querySelector("#addBtn");

renderPhones();
addManufacturerList(elPhoneManufacturer, manufacturers);

counterOfCards();

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addInput();
  renderPhones();
  counterOfCards();

  enableInputToEditAndAdd(products);
  addModalContentChange(products, evt);
  localStorage.setItem("products", JSON.stringify(products));
  deleteAndAddObjFunc(products);
});
deleteAndAddObjFunc(products);

elMyList.addEventListener("click", (evt) => {
  if (evt.target.matches(".btn-secondary")) {
    elForm.dataset.type = "edit";
  }
});
