import JSON from "./accordionData.json"

export const accordionData = JSON.map(item => (
	{
		id: item.id,
		title: item.title,
		content: <p>{item.content}</p>,
	}
))


