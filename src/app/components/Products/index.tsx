import { produtos} from '../../../mocks/produtos'
import { CardProducts } from './CardProducts'
import styles from './products.module.css'

export const Products = () => {

    return (
        <section>
            <h2 className={styles.subtitle}>Produtos que estão bombando!</h2>

            <div className={styles["container-products"]}>
                {
                    produtos.map(produto => {
                        return (
                            <CardProducts 
                                key={produto.id}
                                image={produto.imageSrc}
                                description={produto.descricao}
                                price={produto.preco}
                                subtitle={produto.nome}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}