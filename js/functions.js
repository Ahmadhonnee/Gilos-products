function renderPhones() {
  elMyList.innerHTML = "";

  products.forEach(function (phone) {
    const elTemplateClone = elTemplate.cloneNode(true).content;

    const { title, img, price, model, benefits, addedDate, id } = phone;

    const elPhoneTitle = elTemplateClone.querySelector(".title-phone");
    elPhoneTitle.textContent = title;

    const elPhoneImg = elTemplateClone.querySelector(".myImg");
    elPhoneImg.src = img;

    const elPhonePrice = elTemplateClone.querySelector(".myPrice");
    elPhonePrice.textContent = price;

    const elPhoneModel = elTemplateClone.querySelector(".myModel");
    elPhoneModel.textContent = model;

    const elPhoneDate = elTemplateClone.querySelector(".myDate");
    elPhoneDate.className = "card-text";
    elPhoneDate.textContent = addedDate;

    const elDeleteBtn = elTemplateClone.querySelector(".deleteObj");
    elDeleteBtn.dataset.id = id;

    const elEditBtn = elTemplateClone.querySelector(".btn-secondary");
    elEditBtn.dataset.id = id;

    const elBenefits = elTemplateClone.querySelector(".myBenefits");
    elBenefits.className = "d-flex flex-wrap list-unstyled";

    benefits.forEach((benefit) => {
      const elBenefit = document.createElement("li");

      elBenefit.className = "badge bg-primary me-1 mb-1";
      elBenefit.textContent = benefit;

      elBenefits.append(elBenefit);
    });

    elMyList.append(elTemplateClone);
  });
}

function addInput() {
  addModalBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    elForm.dataset.type = "add";
    const {
      productTitle: elTitle,
      price: elPrice,
      productManufacturer: elModel,
      benefits: elBenefits,
    } = elForm.elements;
    elTitle.value = "";
    elPrice.value = "";
    elModel.value = "";
    elBenefits.value = "";

    modalTitle.textContent = "Add product";
    modalBtn.textContent = "Add product";
  });
  // console.log(arr)
}

function CreateNewDate() {
  const pastDate = new Date();

  return `${pastDate.getDate()}.${
    pastDate.getMonth() + 1
  }.${pastDate.getFullYear()}`;
}

function addManufacturerList(el, manufacturers) {
  manufacturers.forEach((phoneBrand) => {
    const elManufacturer = document.createElement("option");
    elManufacturer.value = phoneBrand.name;
    elManufacturer.textContent = phoneBrand.name;

    el.append(elManufacturer);
    // console.log(elPhoneManufacturer)
  });
}
function counterOfCards() {
  counter.textContent = `Count: ${products.length}`;
}

function deleteAndAddObjFunc(arr) {
  elMyList.addEventListener("click", (evt) => {
    if (evt.target.matches(".deleteObj")) {
      const deleteId = +evt.target.dataset.id;
      console.log(deleteId);

      const deleteCardIndex = arr.findIndex((phone) => {
        return phone.id === deleteId;
      });

      arr.splice(deleteCardIndex, 1);
      renderPhones();
      counterOfCards();
      localStorage.setItem("products", JSON.stringify(products));
    } else if (evt.target.matches(".btn-secondary")) {
      elForm.dataset.type = "edit";

      modalTitle.textContent = "Edit product";
      modalBtn.textContent = "Edit product";

      const editId = +evt.target.dataset.id;
      console.log(editId);

      const editCard = arr.find((phone) => phone.id === editId);

      elForm.dataset.editingId = editId;
      const {
        productTitle: elTitle,
        price: elPrice,
        productManufacturer: elModel,
        benefits: elBenefits,
      } = elForm.elements;

      elTitle.value = editCard.title;
      elPrice.value = editCard.price;
      elModel.value = editCard.model;
      elBenefits.value = editCard.benefits.join(" ");
    }
  });
}

function addModalContentChange(arr, evt) {
  // elForm.addEventListener("submit", (evt) => {
  //   evt.preventDefault();

  const target = evt.target;
  const formType = target.dataset.type;

  if (formType === "edit") {
    arr.splice(EDIT_ID, 1, {
      id: products[EDIT_ID].id,
      title: elPhoneBrand.value,
      img: "https://picsum.photos/id/123/300/200",
      price: elPhonePrice.value,
      model: elPhoneManufacturer.value,
      addedDate: CreateNewDate(),
      benefits: `${elPhoneBenefits.value}`.split(" "),
    });
    console.log(products[EDIT_ID].id);

    renderPhones();
    // });
  } else if (formType === "add") {
    console.log("HI");
    var newObj = {
      id: Math.floor(Math.random() * 1000),
      title: elPhoneBrand.value,
      img: "https://picsum.photos/id/123/300/200",
      price: elPhonePrice.value,
      model: elPhoneManufacturer.value,
      addedDate: CreateNewDate(),
      benefits: `${elPhoneBenefits.value}`.split(" "),
    };
    arr.push(newObj);
    console.log(arr);
  }
  // });
}

function enableInputToEditAndAdd(arr) {}
