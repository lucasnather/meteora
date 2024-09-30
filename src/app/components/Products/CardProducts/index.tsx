import Image from "next/image"
import styles from './card.module.css'

interface CardProductsProps {
    image: string
    subtitle: string
    description: string
    price: string
}

export const CardProducts = ({ description, image , price, subtitle }: CardProductsProps) => {

    return (
        <div className={styles.card}>
            <Image src={image} alt={subtitle} width={350} height={422}/>

            <div className={styles["card__content"]}>
                <h3 className={styles["card__content__subtitle"]}>{subtitle}</h3>
                <p className={styles["card__content__description"]}>{description}</p>
                <p className={styles["card__content__price"]}>{price}</p>

                <button className={styles["card__content__button"]}>Ver Mais</button>
            </div>
        </div>
    )
}