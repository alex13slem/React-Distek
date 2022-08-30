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
			<h5
				className={`accordion__trigger ${classTrigger}`}
				onClick={btnOnClick}
			>
				<span>0{data.id}</span>{data.title}
			</h5>
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