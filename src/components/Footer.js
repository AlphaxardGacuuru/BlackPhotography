const Footer = () => {
	return (
		<div>
			{/* <!-- ***** Footer Area Start ***** --> */}
			<footer class="footer-area">
				{/* <!-- back end content --> */}
				<div class="backEnd-content">
					<img class="dots" src="img/core-img/dots.png" alt="" />
					<h2>Dream</h2>
				</div>

				<div class="container">
					<div class="row">
						<div class="col-12">
							{/* <!-- Copywrite Text --> */}
							<div class="copywrite-text">
								<p>
									{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
							Copyright &copy;
							<script>
										document.write(new Date().getFullYear());
							</script>
							All rights reserved | This template is made with
							<i class="fa fa-heart-o" aria-hidden="true"></i> by
							<a href="https://colorlib.com" target="_blank">Colorlib</a>
									{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* <!-- ***** Footer Area End ***** --> */}
		</div>
	)
}

export default Footer
