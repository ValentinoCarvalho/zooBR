import { GaleryImg } from "../GaleryImg"
import {SmallButton} from "../SmallButton"
import { SmallButtonGreen } from "../SmallButtonGreen"
import "./Galery.css"

export const Galery = ()=>{
    return(
        <>
        <section className="galeryContainer">
        <GaleryImg image="\images\jay-wennington-s-fD5Tpew2k-unsplash.webp" author="@ Jay Wennington" />
        <GaleryImg image="\images\dusan-veverkolog-EpF4P_OGClc-unsplash.webp" author="@ Dusan Veverkolog" />
        <GaleryImg image="\images\henrique-setim-A87UE0vvfo8-unsplash.webp" author="@ Henrique Setim"/>
        <GaleryImg image="\images\kohei-sakai-9oB-WnspdBk-unsplash.webp" author="@ Kohei Sakai"/>
        <GaleryImg image="\images\xiangkun-zhu-HKyOAZkFzRM-unsplash.webp" author="@ Xiangkun Zhu"/>
        <GaleryImg image="\images\colin-meg-TZJ8Q6WWasU-unsplash.webp" author="@ Colin Men"/>
        </section>
        
        <SmallButtonGreen text="Veja mais fotos em nosso Instagram" />
        </>
    )
}