import { CardEase } from "./CardEase"
import ArrowRepeat from '../../../public/arrow-repeat.svg'
import Flower from '../../../public/flower1.svg'
import XDiamond from '../../../public/x-diamond.svg'
import styles from "./ease.module.css"

export const Ease = () => {

    return (
        <section className={styles["container-ease"]}>
            <h2 className={styles.subtitle}>Conheça todas as nossas facilidades</h2>

            <div className={styles["container-ease__cards"]}>
                <CardEase
                    image={XDiamond}
                    subtitle="Pague pelo pix"
                    description="Ganhe 5% OFF em pagamentos via PIX"
                />
                <CardEase
                    image={ArrowRepeat}
                    subtitle="Troca Grátis"
                    description="Fique livre para trocar em até 30 dias."
                />
                
                <CardEase
                    image={Flower}
                    subtitle="Sustentabilidade"
                    description="Moda responsável, que respeita o meio ambiente."
                />
            </div>
        </section>
    )
}