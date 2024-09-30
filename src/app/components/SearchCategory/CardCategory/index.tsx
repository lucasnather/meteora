import Image from "next/image"
import Link from "next/link"
import styles from './card.module.css'

interface CardCategoryProps {
    name: string
    image: string
}

export const CardCategory = ({ image, name }: CardCategoryProps) => {

    return (
        <Link href="#">
            <div className={styles.card}>
                <Image 
                    src={image} 
                    alt={`Category ${name}`} 
                    width={150}
                    height={150} 
                    className={styles["card__image"]}
                />

                <div className={styles["card__category"]}>
                    <p className={styles["card__category__text"]}>{name}</p>
                </div>
            </div>
        </Link>
    )
}