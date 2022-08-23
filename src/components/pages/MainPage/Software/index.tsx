import companys from "../../../generalData/companys.json"
import { SoftwareCard } from "../localComponents/SoftwareCard/SoftwareCard"
import { softwareCardsData } from "../localData/softwareCardsData"


export const Software = () => {
	return (

		<section className="software">
			<div className="software__wrap">
				<div className="software__inner software__inner_top-block">
					<h1 className="software__title">Программное обеспечение для ваших задач</h1>
				</div>
				<div className="software__inner software__inner_bottom-block">
					<SoftwareCard
						items={softwareCardsData}
					/>
				</div>
			</div>
		</section>

	)
}