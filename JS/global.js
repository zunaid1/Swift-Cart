
const footer = document.getElementById("footer-container");
footer.innerHTML = `
<footer class="footer bg-blue-950 text-base-content p-10">

			<div class="w-10/12 mx-auto text-white grid grid-cols-1 md:grid-cols-4 gap-10">
				<nav>
					<h6 class="font-bold btn btn-ghost text-xl text-indigo-200">Swift Cart</h6>
					<p>Your one-stop shop for all your fashion and lifestyle needs. Quality products, fast delivery, and
						excellent support. </p>

				</nav>
				<nav>
					<h6 class="footer-title">QUICK LINKS</h6>
					<div class="flex flex-col space-x-5">
						<a href="index.html">Home</a>
						<a href="products.html">Products</a>
						<a href="about.html">About</a>
						<a href="contact.html">Contact</a>
					</div>
				</nav>
				<nav>
					<h6 class="footer-title">Support</h6>
					<div class="flex flex-col space-x-5">
						<a class="link link-hover">FAQ</a>
						<a class="link link-hover">Shipping</a>
						<a class="link link-hover">Returns </a>
						<a class="link link-hover">Privacy policy</a>
					</div>
				</nav>
				<form>
					<h6 class="footer-title">Subscribe to our newsletter</h6>
					<fieldset class="w-80">
						<label>The latest news, articles and resources, sent to your inbox weekly.</label>
						<div class="join flex flex-col w-full space-y-1">
							<input type="text" placeholder="Enter your email." class="input input-bordered join-item" />
							<button class="btn btn-primary join-item">Subscribe</button>
						</div>
					</fieldset>
				</form>
			</div>

			<div class="w-10/12 mx-auto flex justify-between items-center flex-col md:flex-row">
				<p id="footer-copyrights" class="text-white font-bold text-sm">
					<i class="fa-regular fa-copyright"></i> Swift Cart | <span id="footer-year"></span> | All Rights
					Reserved
				</p>
				<div class="text-white font-bold text-xl flex justify-between items-center space-x-2">
					<i class="fa-brands fa-facebook"></i>
					<i class="fa-brands fa-twitter"></i>
					<i class="fa-brands fa-instagram"></i>
					<i class="fa-brands fa-linkedin"></i>
					<i class="fa-solid fa-envelope"></i>

				</div>

			</div>

		</footer>

`;

