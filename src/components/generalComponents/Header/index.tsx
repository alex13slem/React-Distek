import contacts from "../../generalData/contacts.json"
import mainMenu from "../../generalData/mainMenu.json"
import { Link, animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
	scroll.scrollToTop();
};

export const Header = () => {
	return (
		<header className="header">
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
											offset={-100}
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