import Image from "next/image"
import BannerImage from "../../../public/banner.svg"

export const Banner  = () => {

    return (
        <Image src={BannerImage} alt="banner"  height={415} priority />
    )
}