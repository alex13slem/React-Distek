import contacts from "../../generalData/contacts.json"
import companys from "../../generalData/companys.json"
import social from "../../generalData/socialNetworks.json"

import { FormEmail } from "../FormEmail"
import { Link } from "react-scroll"

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrap">
				<div className="footer__inner footer__inner_top">
					<div className="footer__logo-block">
						<div className="footer__logo"><img src='/svg/site-logo.svg' alt="site-logo" /></div>
						<p>ООО «ДИСТЕК» <br /> Все права защищены</p>
					</div>
					<nav className="footer__nav">
						<ul className="footer__software">
							<h2 className="footer__nav-title">
								<Link
									to="software"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
								>программное обеспечение</Link>
							</h2>
							{companys.map(company => (
								<li
									className="footer__li"
									key={company.id}
								>
									<a href={company.link}>{company.name}</a>
								</li>
							))}
						</ul>
						<ul className="footer__about-us">
							<h2 className="footer__nav-title">
								<Link
									to="hero-page"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
								>О нас
								</Link>
							</h2>
							<li className="footer__li footer__li_arrow-up">
								<Link
									to="news"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
								>
									Новости
								</Link>
							</li>
						</ul>
					</nav>
					<FormEmail />
				</div>
				<div className="footer__inner footer__inner_bottom">
					<div className="footer__bottom footer__bottom_first">
						<div className="footer__tel firm-btn"><a href={`tel:${contacts.tel}`}>{contacts.tel}</a></div>

						<div className="footer__social-block">
							{
								social.map(nw => (
									<a
										href={nw.link}
										className="footer__social-link"
										key={nw.id}
									>
										<img src={nw.icon} alt={nw.name} />
									</a>
								))
							}
						</div>
					</div>
					<div className="footer__bottom footer__bottom_last">
						<div className="footer__contacts">
							<p>{contacts.companyOfficeCity}</p>
							<a href={`tel:${contacts.tel}`}>{contacts.tel}</a>
							<a href={`mailto:${contacts.email}`}>{contacts.email}</a>
						</div>
						<p className="footer__sagirov">сделано в
							<a href="https://sagirov.com/" target="_blank"><img src="/icons/logo-sagirov.png" alt="" /></a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}