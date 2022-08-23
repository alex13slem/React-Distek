import companys from "../../../../generalData/companys.json"


export const SoftwareCardLinks = () => {

	return (


		<div className="hero-page__product-links">
			{companys.map(item => (
				<a className="hero-page__product-link" href={item.link}>
					<div className="hero-page__product-link-logo"><img src={item.srcImage} alt={item.shortname} /></div>
					<p>{item.name}</p>
				</a>
			))}
		</div>


	)

}