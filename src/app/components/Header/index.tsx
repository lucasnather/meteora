import Image from 'next/image'
import Logo from '../../../public/logo-desktop.svg'
import styles from './header.module.css'

export const Header = () => {

    return (
        <header className={styles.header}>
            <div>
                <ul className={styles["header__list"]}>
                    <li>
                        <a href="#">
                            <Image src={Logo} alt='Logo com escrito Meteora' className={styles.logo} />
                        </a>
                    </li>
                    <li><a href="#" className={styles["header__list__link "]}>Home</a></li>
                    <li><a href="#" className={styles["header__list__link "]}>Nossas Lojas</a></li>
                    <li><a href="#" className={styles["header__list__link "]}>Novidades</a></li>
                    <li><a href="#" className={styles["header__list__link "]}>Promoções</a></li>
                </ul>
            </div>

            <div>
                <form action="#">
                    <input
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder='Digite o Produto'
                        className={styles["form__input"]} />
                    <button className={styles["form__button"]}>Buscar</button>
                </form>
            </div>
        </header>
    )
}