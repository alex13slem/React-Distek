import { SoftwareCardData } from "../../../../../types"



export const SoftwareCard = (
	{
		data,
	}: {
		data: any
	}
) => {
	// console.log(data)
	// {
	// 	if (data.links instanceof Array) {
	// 		const links = data.links.map(el => el)
	// 		console.log(links)
	// 	}
	// 	else {
	// 		// console.log('not array')
	// 	}
	// }
	return (

		<div className="software-card">
			<div className="sotware-card__number"><img src={data.number} alt="" /></div>
			<div className="software-card__title">{data.title}</div>
			<div className="software-card__image-block">
				<img src={data.image} alt="" />
				{
					<a className="hero-page__product-link" href={data.links.link}>
						<div className="hero-page__product-link-logo">
							<img src={data.links.srcImage}
								alt={data.links.shortname}
							/>
						</div>
						<p>{data.links.name}</p>
					</a>
				}

			</div>
		</div>

	)

}