import { useEffect, useRef, useState } from "react";
import { AccordionData } from "../../../types"

export const AccordionItem = ({

	// Определение типов
	classItem,
	classTrigger,
	classContent,
	data,
	isOpen,
	btnOnClick
}: {
	classItem?: string;
	classTrigger?: string;
	classContent?: string;
	data: AccordionData;
	isOpen: boolean;
	btnOnClick: () => void;
}) => {

	const contentRef = useRef<HTMLDivElement>(null); // Образец блока
	const [height, setHeight] = useState(0); // Установка высоты нижней части аккордеона

	useEffect(() => {
		// Присвоение высоты нижней части аккордеона в зависимости от условий
		if (isOpen) {
			const contentEl = contentRef.current as HTMLDivElement;

			setHeight(contentEl.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [isOpen]);

	return (
		<div className={`accordion__item ${isOpen ? 'active' : ''} ${classItem}`} >
			<div
				className={`accordion__trigger ${classTrigger}`}
				onClick={btnOnClick}
			>
				<span>0{data.id}</span>
				<p>{data.title}</p>
				<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path className="plus" d="M11 7.30943V8.53774H5V7.30943H11ZM8.70341 5V11H7.30261V5H8.70341Z" />
					<path className="minus" d="M11 7.30943V8.53774H5V7.30943H11ZM8.70341 0" />
					<path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895432 0 0 0.895416 0 2V14C0 15.1046 0.895432 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895416 15.1046 0 14 0H2ZM2 1C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V2C15 1.44772 14.5523 1 14 1H2Z" />
				</svg>

			</div>
			<div
				className={`accordion__content ${classContent}`}
				style={{ height }}
				ref={contentRef}
			>
				{data.content}
			</div>
		</div>
	)
}