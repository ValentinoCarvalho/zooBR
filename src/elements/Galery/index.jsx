import { GaleryBtn } from "../GaleryBtn"
import { GaleryImg } from "../GaleryImg"
import {SmallButton} from "../SmallButton"
import { SmallButtonGreen } from "../SmallButtonGreen"
import "./Galery.css"

export const Galery = ()=>{
    return(
        <>
        <section className="galeryContainer">
        <GaleryImg image="\images\jay-wennington-s-fD5Tpew2k-unsplash.webp" />
        <GaleryImg image="\images\dusan-veverkolog-EpF4P_OGClc-unsplash.webp" />
        <GaleryImg image="\images\henrique-setim-A87UE0vvfo8-unsplash.webp" />
        <GaleryImg image="\images\kohei-sakai-9oB-WnspdBk-unsplash.webp" />
        <GaleryImg image="\images\xiangkun-zhu-HKyOAZkFzRM-unsplash.webp" />
        <GaleryImg image="\images\colin-meg-TZJ8Q6WWasU-unsplash.webp" />
        </section>
        
        <SmallButtonGreen text="Veja mais fotos em nosso Instagram" />
        </>
    )
}