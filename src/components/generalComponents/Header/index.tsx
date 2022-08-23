import contacts from "../../generalData/contacts.json"
import mainMenu from "../../generalData/mainMenu.json"



export const Header = () => {
	return (
		<header className="header">
			<div className="header__wrap">
				<div className="header__inner">
					<nav className="header__navbar">
						<a className="header__site-logo" href="javascript:void(0)"><img src='/svg/site-logo.svg' alt="site-logo" /></a>
						<ul>
							{
								mainMenu.map(item => (
									<li><a href={`${item.link}`}>{item.name}</a></li>
								))
							}
						</ul>
					</nav>
					<a className="header__tel" href={`tel:${contacts.tel}`}>{contacts.tel}</a>
				</div>
			</div>
		</header>
	)
}