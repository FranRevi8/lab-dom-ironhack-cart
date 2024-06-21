// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  let priceElement = product.querySelector(".price span");
  let quantityElement = product.querySelector(".quantity input");

  let price = priceElement.innerText;
  let quantity = quantityElement.value;

  let subtotalPrice = price * quantity;

  let subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll(".product");

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    let subtotal = Number(
      products[i].querySelector(".subtotal span").innerText
    );
    total += subtotal;
  }

  let totalElement = document.querySelector("#total-value span");
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const buttonClicked = target;
  const productElement = buttonClicked.closest(".product");
  let totalPrice = document.querySelector("#total-value span");
  let productSubtotal = productElement.querySelector(".subtotal span");

  newPrice = Number(totalPrice.innerText) - Number(productSubtotal.innerText);

  totalPrice.innerText = newPrice;

  productElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const newProductInput = document.querySelector(
    `tfoot tr td input[type="text"]`
  );
  const newPriceInput = document.querySelector(
    `tfoot tr td input[type="number"]`
  );

  const newProduct = newProductInput.value;
  const newPrice = newPriceInput.value;

  const newProductRow = document.createElement("tr");
  newProductRow.classList.add("product");

  newProductRow.innerHTML = `<td class="name">
          <span>${newProduct}</span>
        </td>
        <td class="price">$<span>${newPrice}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>`;

  document.querySelector("tbody").appendChild(newProductRow);

  newProductInput.value = "";
  newPriceInput.value = 0;

  newProductRow
    .querySelector(".btn-remove")
    .addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const removeProductBtn = document.querySelectorAll(".btn-remove");
  removeProductBtn.forEach((element) => {
    element.addEventListener("click", removeProduct);
  });

  const newProductBtn = document.querySelector("#create");
  newProductBtn.addEventListener("click", createProduct);
});
