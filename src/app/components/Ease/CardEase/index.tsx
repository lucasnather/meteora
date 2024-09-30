import Image from "next/image"
import styles from './card.module.css'

interface CardEaseProps {
    image: string
    subtitle: string
    description: string
}

export const CardEase = ({ description, image, subtitle  }: CardEaseProps) => {

    return (
        <div className={styles.card}>
            <Image src={image} alt={description} />

            <div>
                <h3 className={styles["card__subtitle"]}>{subtitle}</h3>
                <p className={styles["card__description"]}>{description}</p>
            </div>
        </div>
    )
}