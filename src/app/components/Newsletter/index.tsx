import { Dialog } from '@radix-ui/themes'
import styles from './newsletter.module.css'
import CheckCircle from '../../../public/check-circle.svg'
import Image from 'next/image'

export const Newsletter = () => {

    return (
        <section className={styles.newsletter}>
            <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>


            <Dialog.Root>   
                <form action="#" className={styles["newsletter__form"]}>
                    <input type="email" name="email" id="email" placeholder='Digite seu email'/>
                    <Dialog.Trigger>
                        <button>Enviar</button>
                    </Dialog.Trigger>
                </form>

                <Dialog.Content className={styles["dialog-content"]}>
                    <div>
                        <div className={styles["newsletter__modal__header"]}>
                            <div>
                                <Image src={CheckCircle} alt='icon check circle' />
                                <p>Email cadastrado com sucesso!</p>
                            </div>
                            <Dialog.Close>
                                <button className={styles["newsletter__form__button__close"]}>X</button>
                            </Dialog.Close>
                        </div>
                        <p className={styles["dialog-content__text"]}>Em breve você receberá novidades exclusivas da Meteora.</p>
                    </div>
                </Dialog.Content>
            </Dialog.Root>
        </section>
    )
}