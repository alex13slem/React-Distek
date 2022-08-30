import contacts from "../../generalData/contacts.json"
import mainMenu from "../../generalData/mainMenu.json"
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState, useEffect, useRef } from "react";


const scrollToTop = () => {
	scroll.scrollToTop();
};

// ---------------------------------------



export const Header = () => {

	const headerRef = useRef<HTMLDivElement>(null)
	const headerHeight = headerRef.current?.clientHeight as number

	const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
	const [prevScrollPosition, setPrevScrollPosition] = useState(0)
	const [headerTop, setHeaderTop] = useState(0)

	const handleScroll = () => {
		setCurrentScrollPosition(window.scrollY);
		setPrevScrollPosition(currentScrollPosition);

		let scrollStep = prevScrollPosition - currentScrollPosition
		let scrollValue = headerTop - + scrollStep

		if (
			scrollValue > -headerHeight
			&&
			scrollValue < 0
		) {
			setHeaderTop(scrollValue)
		}

		console.log(scrollValue, -headerHeight)
	};

	useEffect(() => {

		window.addEventListener('scroll', handleScroll);

		// console.log(currentScrollPosition, prevScrollPosition)

		// if (currentScrollPosition > prevScrollPosition) {
		// 	setHeaderTop(scrollDown)

		// } else {
		// 	setHeaderTop(scrollUp)
		// }

		// if (currentScrollPosition > prevScrollPosition) {
		// 	setHeaderTop(-headerHeight)

		// } else {
		// 	setHeaderTop(0)
		// }

	});
	return (
		<header className="header"
			ref={headerRef}
			style={{ top: headerTop }}
		>
			<div className="header__wrap">
				<div className="header__inner">
					<nav className="header__navbar">
						<a
							className="header__site-logo"
							onClick={scrollToTop}
						>
							<img src='/svg/site-logo.svg' alt="site-logo" />
						</a>
						<ul>
							{
								mainMenu.map(item => (
									<li
										key={item.id}
									>
										<Link

											activeClass="active"
											to={`${item.link}`}
											spy={true}
											smooth={true}
											offset={-headerHeight}
											duration={100}

										>{item.name}</Link>
									</li>
								))
							}
						</ul>
					</nav>
					<div className="header__tel firm-btn"><a href={`tel:${contacts.tel}`}>{contacts.tel}</a></div>
				</div>
			</div>
		</header>
	)
}