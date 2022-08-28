import { SoftwareCard } from "../localComponents/SoftwareCard"
import { softwareCardsData } from "../localData/softwareCardsData"
import { useRef, useState } from "react"


export const Software = () => {

	const softwareCardsBlock = useRef<HTMLDivElement>(null)

	return (

		<section className="software">
			<div className="software__wrap">
				<div className="software__inner software__inner_top-block">
					<h2 className="software__title">Программное обеспечение для ваших задач</h2>
				</div>
				<div
					className="software__inner software__inner_bottom-block"
					ref={softwareCardsBlock}
				>
					{


						softwareCardsData.map((item) => (

							<SoftwareCard
								data={item}
								key={item.id}
							/>

						)
						)}
				</div>
			</div>
		</section>

	)
}