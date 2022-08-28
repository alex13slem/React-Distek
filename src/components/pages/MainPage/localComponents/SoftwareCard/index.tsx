import { useEffect, useRef, useState } from "react"
import { Companys, SoftwareCardData } from "../../../../../types"


export const SoftwareCard = (
	{
		data
	}: {
		data: SoftwareCardData
	}
) => {

	return (

		<div className="software-card">
			<div className="sotware-card__number box-number"><img src={data.number} alt="" /></div>
			<h3 className="software-card__title">{data.title}</h3>



			<div className="software-card__image"><img src={data.image} alt='' /></div>
			<div className="software-card__product-links">
				{
					data.links.map((links: Companys) => (
						<a
							className="software-card__product-link product-link"
							href={links.link}
							key={links.id}
						>
							<div className="product-link__logo">
								<img src={links.srcImage}
									alt={links.shortname}
								/>
							</div>
							<p>{links.name}</p>
						</a>
					))
				}
			</div>


			<ul className="software-card__list">
				{
					data.list.map((el: string, idx) => (
						<li
							key={idx}
						>{el}</li>
					))
				}
			</ul>

		</div>



	)

}