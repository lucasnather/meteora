import Image from "next/image"
import CheckCircle from '../../../../public/check-circle.svg'
import styles from './card.module.css'
import { Dialog } from "@radix-ui/themes"

interface CardProductsProps {
    image: string
    subtitle: string
    description: string
    price: string
    size?: string[]
    colors: Colors[]
}

interface Colors {
    nome: string
    hexa: string
}

export const CardProducts = ({ description, image , price, subtitle, size, colors }: CardProductsProps) => {

    const isSizeExist = size !== undefined

    return (
       <Dialog.Root>
            <div className={styles.card}>
                <Image src={image} alt={subtitle} width={350} height={422}/>

                <div className={styles["card__content"]}>
                    <h3 className={styles["card__content__subtitle"]}>{subtitle}</h3>
                    <p className={styles["card__content__description"]}>{description}</p>
                    <p className={styles["card__content__price"]}>{price}</p>

                    <Dialog.Trigger >
                        <button className={styles["card__content__button"]}>Ver Mais</button>
                    </Dialog.Trigger>
                </div>
            </div>

            <Dialog.Content className={styles["dialog-content"]}>
                <div>
                    <div className={styles["product__modal__header"]}>
                        <div>
                            <Image src={CheckCircle} alt='icon check circle' />
                            <p>Confira detalhes sobre o produto</p>
                        </div>

                        <Dialog.Close>
                            <button className={styles["product__form__button__close"]}>X</button>
                        </Dialog.Close>
                    </div>
                </div>

                <div className={styles["dialog-content__products"]}>
                    <Image src={image} alt={subtitle} width={350} height={422} />

                    <div>
                        <div>
                            <h3 className={styles["dialog-content__products__subtitle"]}>{subtitle}</h3>
                            <p className={styles["dialog-content__products__description"]}>{description}</p>
                        </div>

                        <hr />

                        <div>
                            <p className={styles["dialog-content__products__price"]}>{price}</p>
                            <span className={styles["dialog-content__products__span"]}>Vendido e entregue por Riachuelo</span>
                        </div>

                        <hr className={styles["dialog-content__products__hr"]} />

                        <form action="#">
                            <div>
                                <p className={styles["dialog-content__products__subtitles"]}>Cores:</p>

                                <div className={styles["container-input-radio"]}>
                                    {
                                        colors.map(({ hexa, nome }) => {
                                            return (
                                                <div key={nome}>
                                                    <input type="radio" name="colors" id="colors" style={{ accentColor: hexa, borderColor: hexa }} />
                                                    <label htmlFor="colors" className={styles["dialog-content__products__label"]}>{nome}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <hr className={styles["dialog-content__products__hr"]} />

                            <div>
                              {
                                !isSizeExist ?
                                    <p className={styles["dialog-content__products__subtitles"]}>Estamos sem esse tamanho</p>
                                    :
                                    <div>
                                        <p className={styles["dialog-content__products__subtitles"]}>Tamanho:</p>
                                        <div className={styles["container-input-radio"]}>
                                            {
                                                size?.map((s, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <input type="radio" name="size" id="size" />
                                                            <label htmlFor="size" className={styles["dialog-content__products__label"]}>{s}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                              }
                            </div>

                            <button className={styles["dialog__form__button"]}>Adicionar à sacola</button>
                        </form>
                    </div>
                </div>
            </Dialog.Content>
       </Dialog.Root>
    )
}