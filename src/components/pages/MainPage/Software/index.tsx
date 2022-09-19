
import { softwareCardsData } from "../../../../data/mainPage/softwareCardsData"
import { SoftwareCard } from "../localComponents/SoftwareCard"

export const Software = () => {

	return (

		<section className="software">
			<div className="software__wrap">
				<div className="software__inner software__inner_top-block">
					<h2 className="software__title">Программное обеспечение для ваших задач</h2>
				</div>
				<div
					className="software__inner software__inner_bottom-block"
				>
					{softwareCardsData.map((item) => (
						<SoftwareCard
							data={item}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</section>

	)
}