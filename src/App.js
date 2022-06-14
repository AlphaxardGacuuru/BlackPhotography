import { HashRouter as Router, Route } from "react-router-dom"

import Header from "./components/Header"
import Index from "./components/Index"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import ScrollToTop from "./components/ScrollToTop"

function App() {

	/*
	*
	* Register service worker */
	if (window.location.href.match(/https/)) {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/sw.js')
				// .then((reg) => console.log('Service worker registered', reg))
				// .catch((err) => console.log('Service worker not registered', err));
			})
		}
	}

	return (
		<Router>
			<div className="App">
				<ScrollToTop />
				<Header />
				<Route path="/" exact render={() => (<Index />)} />
				<Route path="/about" exact render={() => (<About />)} />
				<Route path="/services" exact render={() => (<Services />)} />
				<Route path="/portfolio" exact render={() => (<Portfolio />)} />
				<Route path="/contact" exact render={() => (<Contact />)} />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
