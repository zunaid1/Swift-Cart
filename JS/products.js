//======Manage Spiner=======
const ManageSpinner = (status) => {
	if (status == true) {
		document.getElementById("spinner").classList.remove("hidden");
		document.getElementById("product-container").classList.add("hidden");
	}
	else {
		document.getElementById("product-container").classList.remove("hidden");
		document.getElementById("spinner").classList.add("hidden");
	}
}


//=======LoadProductByCategory=======
const LoadProductByCategory = (category) => {

	let url = "https://fakestoreapi.com/products";

	if (category == "all") {
		url = "https://fakestoreapi.com/products";
	} else {
		url = `https://fakestoreapi.com/products/category/${category}`;
	}

	fetch(url)
		.then(res => res.json())
		.then((data) => ProductByCategory(data));

};


const ProductByCategory = (data) => {
	ManageSpinner(true);

	const productContainer = document.getElementById("product-container");
	productContainer.innerHTML = "";

	data.forEach(element => {
		//create element
		const card = document.createElement("div");
		card.innerHTML = `

		<!-- Card-Start -->
			<div class=" bg-white rounded-xl shadow-xl border-2 border-blue-100 relative flex flex-col h-full transform transition duration-300 
            hover:scale-105 hover:shadow-2xl">
			<h2 id="productId" class="hidden absolute left- -top-5 left-1/2 -translate-x-1/2 font-bold text-xl bg-slate-400 text-center w-8 h-8 rounded-full">${element.id}</h2>
			

				<!-- Image -->
				<div class="bg-gray-100 p-6 flex justify-center">
					<img class="card-img w-full h-100" src="${element.image}" />
				</div>

				<!-- Content -->
				<div class="p-4 space-y-3">

					<!-- Top row -->
					<div class="flex justify-between items-center">
						<span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-medium">
							${element.category}
						</span>
						
						

						<div class="flex items-center text-sm text-gray-500">
							<i class="fa-solid fa-star text-yellow-400 mr-1"></i>
							<span>${element.rating.rate} (${element.rating.count})</span>
						</div>
					</div>

					<!-- Title -->
					<h3 class="font-semibold text-gray-800 text-lg leading-tight">
						${element.title}
					</h3>

					<!-- Price -->
					<p class="text-xl font-bold text-gray-900">$ ${element.price}</p>

					<!-- Buttons -->
					<div class="flex gap-3 pt-2">

						<!-- Details -->
						<button onclick="ShowDetails(${element.id})"
							class="flex-1 border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-100 transition">
							<i class="fa-regular fa-eye mr-2"></i>
							Details
						</button>

						<!-- Add -->
						<button onclick="addToCart(${element})"
						class="add-btn flex-1 bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition">
							<i class="fa-solid fa-cart-shopping mr-2"></i>
							Add
						</button>

					</div>

				</div>
			</div>
			<!-- Card End -->
		
		
		`;

		const addButton = card.querySelector(".add-btn");
		addButton.addEventListener("click", function () {
			addToCart(element);
		});


		//assign & append data to created elements
		productContainer.append(card);


	});
	ManageSpinner(false);
}

//======Load Product Category===================================
const CategoryUrl = "https://fakestoreapi.com/products/categories";
fetch(CategoryUrl)
	.then(res => res.json())
	.then((data) => DisplayCategory(data));

const DisplayCategory = (data) => {
	const categoryContainer = document.getElementById("category-container");

	const allBtn = document.createElement("button");
	allBtn.classList.add("btn", "btn-outline", "btn-primary", "shadow", "p-8", "text-xl", "btn-cat-all");
	allBtn.innerText = "All";

	allBtn.addEventListener("click", () => {
		setActiveButton(allBtn);
		LoadProductByCategory("all");
	})
	categoryContainer.append(allBtn);


	data.map((element) => {

		const categoryBtn = document.createElement("button");

		categoryBtn.classList.add("btn", "btn-outline", "btn-primary", "shadow", "p-8", "text-xl");
		const FormattedText = toSentenceCase(element);
		categoryBtn.innerText = FormattedText;

		categoryBtn.addEventListener("click", () => {
			setActiveButton(categoryBtn);
			LoadProductByCategory(element);
		});

		categoryContainer.append(categoryBtn);

	})
}



//======LoadProduct================================================

const toSentenceCase = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

//================================================
//-----Methods Start 
//===============================================
//Footer Dynamic text
const currentYear = new Date().getFullYear();
document.getElementById("footer-year").textContent = currentYear;

//========SetActive Button=======================
const setActiveButton = (clickedBtn) => {
	const allButtons = document.querySelectorAll("#category-container button");

	allButtons.forEach(btn => {
		btn.classList.remove("btn-primary");
		btn.classList.add("btn-outline");
	});

	// Active button style
	clickedBtn.classList.remove("btn-outline");
	clickedBtn.classList.add("btn-primary");
};



//=====Add To Cart================================
function addToCart(product) {

	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	const existingProduct = cart.find(item => item.id == product.id);

	if (existingProduct) {
		existingProduct.quantity = (existingProduct.quantity || 0) + 1;

	} else {

		cart.push({
			id: product.id,
			title: product.title,
			price: product.price,
			image: product.image,
			quantity: 1
		});

	}

	localStorage.setItem("cart", JSON.stringify(cart));
	updateCartCount();
	alert("Product Added Successfully!");


}




//=====ShowDetails====================================
const ShowDetails = async (id) => {
	const url = `https://fakestoreapi.com/products/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	DisplayDetails(data);
}


const DisplayDetails = (data) => {
	console.log(data);
	const modal_Data_Container = document.getElementById("modal-data-container");

	modal_Data_Container.innerHTML = `
	<!-- LEFT: IMAGE -->
				<div class="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
					<img id="modal-image" src="${data.image}" alt="product" class="max-h-[350px] object-contain" />
				</div>


				<!-- RIGHT: Content -->
				<div class="space-y-4">
					
					<!-- Category -->
					<span id="modal-category" class="badge badge-outline badge-primary">${data.category}
					
					</span>

					<!-- Title -->
					<h2 id="modal-title" class="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">${data.title}
					</h2>


					<!-- Rating -->
					<div class="flex items-center gap-2">
						<div class="rating rating-sm">${data.rating.rate}
							⭐ <span id="modal-rating" class="font-semibold ml-1"></span>
						</div>
						<span id="modal-count" class="text-sm text-gray-500">${data.rating.count}</span>
					</div>
					<!-- Price -->
					<div class="text-3xl font-extrabold text-primary">
						$<span id="modal-price">${data.price}</span>
					</div>

					<!-- Description -->
					<p id="modal-description" class="text-gray-600 leading-relaxed border-t pt-4">${data.description}
					</p>


					<!-- Buttons -->
					<div class="pt-4 flex gap-3">
						<button class="btn btn-primary flex-1 modal-add-btn">🛒 Add to Cart </button>
						<button onclick="card_details_modal.close()" class="btn btn-outline flex-1">
							Close
						</button>


					</div>
					<span id="productId" class="badge badge-outline badge-primary hidden">${data.id}
				</div> `

	const addBtn = modal_Data_Container.querySelector(".modal-add-btn");
	addBtn.addEventListener("click", () => {
		addToCart(data);
	});
	document.getElementById("card_details_modal").showModal();
}

//====cart counter======
const updateCartCount = () => {
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

	document.getElementById("cart-count").innerText = totalItems;
};
updateCartCount();