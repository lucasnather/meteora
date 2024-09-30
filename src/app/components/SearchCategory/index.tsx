import { CardCategory } from "./CardCategory"
import { categorias } from "../../../mocks/categorias"
import styles from './search.module.css'

export const SearchCategory = () => {

    return (
        <section>
            <h2 className={styles.subtitle}>Busque por categoria:</h2>

            <div className={styles["container__card"]}>
                {
                    categorias.map(categoria => {
                        return (
                            <CardCategory
                                image={categoria.imageSrc}
                                name={categoria.nome}
                                key={categoria.nome}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}