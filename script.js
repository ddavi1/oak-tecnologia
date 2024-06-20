document.addEventListener("DOMContentLoaded", () => {
    const formSection = document.getElementById("form-section");
    const listSection = document.getElementById("list-section");
    const productForm = document.getElementById("product-form");
    const productList = document.getElementById("product-list").getElementsByTagName("tbody")[0];
    const newProductButton = document.getElementById("new-product-button");
    const viewProductsButton = document.getElementById("view-products-button");

    let products = [];

    productForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("productName").value;
        const description = document.getElementById("productDescription").value;
        const price = parseFloat(document.getElementById("productPrice").value);
        const available = document.getElementById("productAvailable").value;

        const product = { name, description, price, available };
        products.push(product);

        products.sort((a, b) => a.price - b.price);

        displayProducts();

        formSection.style.display = "none";
        listSection.style.display = "block";

        productForm.reset();
    });

    newProductButton.addEventListener("click", () => {
        formSection.style.display = "block";
        listSection.style.display = "none";
    });

    viewProductsButton.addEventListener("click", () => {
        displayProducts();
        formSection.style.display = "none";
        listSection.style.display = "block";
    });

    function displayProducts() {
        productList.innerHTML = "";

        products.forEach(product => {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const priceCell = document.createElement("td");

            nameCell.textContent = product.name;
            priceCell.textContent = product.price.toFixed(2);

            row.appendChild(nameCell);
            row.appendChild(priceCell);
            productList.appendChild(row);
        });
    }
});
