import { useEffect, useRef, useState } from "react";
import { AccordionData } from "../../../types"

export const AccordionItem = ({
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
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
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