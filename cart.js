const cartTable = document.getElementById("cart-table");
const cartTotalEl = document.getElementById("cart-total");

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render function
function renderCart() {
    cartTable.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const tr = document.createElement("tr");
        tr.classList.add("border-b");

        tr.innerHTML = `
            <td class="py-3 px-4 flex items-center gap-3">
                <img class="w-16 h-16 object-cover" src="${item.image}" alt="${item.title}">
                <span>${item.title}</span>
            </td>
            <td class="py-3 px-4">$${item.price}</td>
            <td class="py-3 px-4">
                <button class="decrease bg-gray-300 px-2 rounded">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="increase bg-gray-300 px-2 rounded">+</button>
            </td>
            <td class="py-3 px-4">$${itemTotal.toFixed(2)}</td>
            <td class="py-3 px-4">
                <button class="remove bg-red-500 text-white px-3 py-1 rounded">Remove</button>
            </td>
        `;

        // Increase quantity
        tr.querySelector(".increase").addEventListener("click", () => {
            item.quantity += 1;
            saveCart();
            renderCart();
        });

        // Decrease quantity
        tr.querySelector(".decrease").addEventListener("click", () => {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                // Optional: remove if 0
                cart.splice(index, 1);
            }
            saveCart();
            renderCart();
        });

        // Remove product
        tr.querySelector(".remove").addEventListener("click", () => {
            cart.splice(index, 1);
            saveCart();
            renderCart();
        });

        cartTable.appendChild(tr);
    });

    cartTotalEl.textContent = total.toFixed(2);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Initial render
renderCart();