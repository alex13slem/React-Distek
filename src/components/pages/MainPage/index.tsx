import { Dealers } from "./dealers"
import { HeroPage } from "./heroPage"
import { News } from "./news"
import { Software } from "./software"



export const MainPage = () => {
	return (
		<main className="main">
			<HeroPage />
			<Software />
			<Dealers />
			<News />
		</main>
	)
}