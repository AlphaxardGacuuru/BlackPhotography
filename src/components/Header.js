import { Link } from "react-router-dom"

const open = () => document.getElementById("MyElement").className = "menu-open"
const close = () => document.getElementById("MyElement").classList.remove("menu-open")

window.onscroll = () => {
	if (window.pageYOffset > 0) {
		document.getElementById("header-area").classList.add("sticky")
	} else {
		document.getElementById("header-area").classList.remove("sticky")
	}
}

const Header = () => {
	return (
		<div id="MyElement">
			{/* Preloader Start */}
			{/* <div id="preloader">
				<div class="preload-content">
					<div id="sonar-load"></div>
				</div>
			</div> */}
			{/* Preloader End */}

			{/* <!-- Grids --> */}
			<div class="grids d-flex justify-content-between">
				<div class="grid1"></div>
				<div class="grid2"></div>
				<div class="grid3"></div>
				<div class="grid4"></div>
				<div class="grid5"></div>
				<div class="grid6"></div>
				<div class="grid7"></div>
				<div class="grid8"></div>
				<div class="grid9"></div>
			</div>

			{/* <!-- ***** Main Menu Area Start ***** --> */}
			<div class="mainMenu d-flex align-items-center justify-content-between">
				{/* <!-- Close Icon --> */}
				<div class="closeIcon" onClick={close}>
					<i class="ti-close" aria-hidden="true"></i>
				</div>
				{/* <!-- Logo Area --> */}
				<div class="logo-area">
					<Link to="/">HAVI Lenses</Link>
				</div>
				{/* <!-- Nav --> */}
				<div class="sonarNav wow fadeInUp" data-wow-delay="1s">
					<nav>
						<ul>
							<li class="nav-item active">
								<Link class="nav-link" to="/" onClick={close}>Home</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/about" onClick={close}>About Me</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/services" onClick={close}>Services</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/portfolio" onClick={close}>Portfolio</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/contact" onClick={close}>Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
				{/* <!-- Copwrite Text --> */}
				<div class="copywrite-text">
					<p>
						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
				Copyright &copy;
				<script>
							document.write(new Date().getFullYear());
				</script> All rights reserved | This template is made
				with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com"
							target="_blank">Colorlib</a>
						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
					</p>
				</div>
			</div>
			{/* <!-- ***** Main Menu Area End ***** --> */}

			{/* <!-- ***** Header Area Start ***** --> */}
			<header id="header-area" class="header-area">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12">
							<div class="menu-area d-flex justify-content-between">
								{/* <!-- Logo Area  --> */}
								<div class="logo-area">
									<Link to="/">HAVI Lenses</Link>
								</div>

								<div class="menu-content-area d-flex align-items-center">
									{/* <!-- Header Social Area --> */}
									<div class="header-social-area d-flex align-items-center">
										<a href="tel:0700364446" data-toggle="tooltip" data-placement="bottom" title="Phone">
											<i class="fa fa-phone" aria-hidden="true"></i>
										</a>
										<a href="sms:0700364446" data-toggle="tooltip" data-placement="bottom" title="SMS">
											<i class="fa fa-comment-o" aria-hidden="true"></i>
										</a>
										<a href="https://wa.me/+2540700364446" data-toggle="tooltip" data-placement="bottom" title="WhatsApp">
											<i class="fa fa-whatsapp" aria-hidden="true"></i>
										</a>
										<a href="mailto:alphaxardgacuuru47@gmail.com?subject = Photography&body = Enquiry" data-toggle="tooltip" data-placement="bottom" title="Email">
											<i class="fa fa-envelope-o" aria-hidden="true"></i>
										</a>
										<a href="https://www.instagram.com/alphaxard_gacuuru" data-toggle="tooltip"
											data-placement="bottom" title="Instagram">
											<i class="fa fa-instagram" aria-hidden="true"></i>
										</a>
										<a href="https://www.facebook.com/alphaxard.gacuuru" data-toggle="tooltip"
											data-placement="bottom" title="Facebook">
											<i class="fa fa-facebook" aria-hidden="true"></i>
										</a>
									</div>
									{/* <!-- Menu Icon --> */}
									<span class="navbar-toggler-icon" id="menuIcon" onClick={open}></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* <!-- ***** Header Area End ***** --> */}

		</div>
	)
}

export default Header
