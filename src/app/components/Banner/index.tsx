'use client'

import Image from "next/image"
import Banner1 from "../../../public/banner.svg"
import Banner2 from "../../../public/banner-02.png"
import Banner3 from "../../../public/banner-03.png"
import useEmblaCarrousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './banner.module.css'

export const Banner  = () => {

    const [ emblaRef ] = useEmblaCarrousel({
        duration: 75
    }, [Autoplay()])

    return (
        <section className={styles.embla} ref={emblaRef}>
            <div className={styles["embla__container"]}>
                <div className={styles["embla__slide"]}>
                    <Image src={Banner1} alt="banner"  height={415} priority />                    
                </div>
                <div className={styles["embla__slide"]}>
                    <Image src={Banner2} alt="banner"  height={415} priority />
                </div>
                <div className={styles["embla__slide"]}>
                    <Image src={Banner3} alt="banner"  height={415} priority />      
                </div>
            </div>
        </section>
    )
}

