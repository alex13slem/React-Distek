import cardNum1 from "../../../../assets/svg/icons/block-number-1.svg"
import cardNum2 from "../../../../assets/svg/icons/block-number-2.svg"
import cardNum3 from "../../../../assets/svg/icons/block-number-3.svg"

import cardImg1 from "../../../../assets/images/software/card-1.gif"
import cardImg2 from "../../../../assets/images/software/card-2.gif"
import cardImg3 from "../../../../assets/images/software/card-3.gif"

import companyLinks from "../../../generalData/companys.json"

const sketchup = [companyLinks.find(el => el.id === 1)]
const trimble = [companyLinks.find(el => el.id === 4)]
const tekla = [companyLinks.find(el => el.id === 2), companyLinks.find(el => el.id === 3)]
// console.log(tekla)

export const softwareCardsData = [
	{
		id: 1,
		title: <span>Эскизное <br /> 3d-моделирование</span>,
		number: cardNum1,
		image: cardImg1,
		links: sketchup,
		list: [
			"Быстрое, простое и качественное создание 3D-моделей любых объектов по чертежу, изображению, фотографии и т.д.",
			"Оформление проектной документации по требованиям ЕСКД и СПДС, создание отчётов и спецификаций",
			"Крупнейшая библиотека бесплатных 3D-моделей",
			"Просмотр модели в виртуальной реальности",
			"Обмер помещений непосредственно в SketchUp"
		],
	},
	{
		id: 2,
		title: "Моделирование и деталировка",
		number: cardNum2,
		image: cardImg2,
		links: tekla,
		list: [
			"Создание информационной модели с высоким уровнем детализации (LOD 500)",
			"Совместная работа над проектом с неограниченным количеством участников ",
			"Создание отчетов и экспорт ЧПУ файлов",
			"Экономическая оценка конструкций на этапе планирования ",
			"Проверка на коллизии в один клик"
		],
	},
	{
		id: 3,
		title: "Доступ к проектной информации ",
		number: cardNum3,
		image: cardImg3,
		links: trimble,
		list: [
			"Совместная работа над проектом из любой точки мира",
			"Неограниченное облачное хранилище документов и моделей",
			"Контроль изменений в проекте ",
			"Назначение статуса и определение сроков выполнения задач",
			"Просмотр сведения о проекте в мобильном приложении Trimble Connect или VR-гарнитуре"
		],
	},
]