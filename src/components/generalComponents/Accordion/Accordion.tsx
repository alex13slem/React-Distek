import { AccordionItem } from "./AccordionItem"
import { AccordionData } from "../../../types"
import { useState } from "react"

export const Accordion = (

	{
		items,
		classAccordion,
		classItem,
		classTrigger,
		classContent,
	}: {
		items: Array<AccordionData>;
		classAccordion?: string;
		classItem?: string;
		classTrigger?: string;
		classContent?: string;
	}

) => {
	console.log(items)
	const [currentIdx, setCurrentIdx] = useState(-1)
	const btnOnClick = (idx: number) => {
		setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1))
	}

	return (
		<div className={`accordion ${classAccordion}`}>
			{items.map((item, idx) => (
				<AccordionItem
					classItem={classItem}
					classTrigger={classTrigger}
					classContent={classContent}
					key={idx}
					data={item}
					isOpen={idx === currentIdx}
					btnOnClick={() => btnOnClick(idx)}
				/>

			))}
		</div>
	)
}