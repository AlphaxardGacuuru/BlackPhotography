import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';

const Index = () => {
	return (
		<div>
			{/* <!-- ***** Hero Area Start ***** --> */}
			<Carousel controls={false}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="img/bg-img/IMG_20210410_053027_589.jpg"
						alt="First slide"
						loading="lazy" />
					<Carousel.Caption>
						<h3 style={{ color: "white" }}>Gachie</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="img/bg-img/IMG_20210218_143829_548.jpg"
						alt="Second slide"
						loading="lazy" />

					<Carousel.Caption>
						<h3 style={{ color: "white" }}>Aboretum</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="img/bg-img/IMG_20210403_150159_526.jpg"
						alt="Third slide"
						loading="lazy" />

					<Carousel.Caption>
						<h3 style={{ color: "white" }}>Kasarani</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			{/* <!-- ***** Hero Area End ***** --> */}

			<br />
			<br />

			{/* <!-- ***** Call to Action Area Start ***** --> */}
			<div class="sonar-call-to-action-area section-padding-0-100">
				<div class="backEnd-content">
					<h2>Real</h2>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="call-to-action-content wow fadeInUp" data-wow-delay="0.5s">
								<h2>"In photography there is a reality so subtle that it becomes more <b>real</b> than reality."
						</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ***** Call to Action Area End ***** --> */}

			<div class="sonar-testimonials-area bg-img" style={{ backgroundImage: "url(img/bg-img/tes.jpg)" }}>
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-md-10 col-lg-7">
							<div class="testimonial-content bg-white">
								<div class="section-heading text-left">
									<div class="line"></div>
									<h2>What I do</h2>
								</div>

								<div class="single-tes-slide">
									<h5>Wedding Photography</h5>
									<h6>I take your day and immortalize it in breath taking photography so you can remember it
								for all time, share it with your friends, family, children and generations to come.</h6>
								</div>
								<br />
								<br />

								<div class="single-tes-slide">
									<h5>Wedding Videography</h5>
									<h6>I take your eventful day and turn it into a movie. With my skilled team of experienced
								videographers, we capture every emotion of the day frame by frame.</h6>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			{/* <!-- ***** Call to Action Area Start ***** --> */}
			<div class="sonar-call-to-action-area section-padding-0-100">
				<div class="backEnd-content">
					<h2>Dream</h2>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="call-to-action-content wow fadeInUp" data-wow-delay="0.5s">
								<h2>I'm an experienced photographer and videographer</h2>
								<h5>Let’s talk</h5>
								<Link to="/contact" class="btn sonar-btn mt-100">contact me</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ***** Call to Action Area End </br>***** --> */}

		</div>
	)
}

export default Index
