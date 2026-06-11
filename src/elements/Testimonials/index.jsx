import { Reviews } from "../Reviews"
import "./Testimonials.css"

export const Testimonials = () => {
    return (
        <>
            <section className="testimonials">
                <Reviews image="\images\slav-romanov-BrEAp01_m5w-unsplash.webp" title="Marceline Ribeiro" text="Fiquei impressionada com a qualidade dos habitats e com os programas de conservação desenvolvidos pelo Zoo BR. É inspirador ver uma instituição que alia educação ambiental, pesquisa científica e bem-estar animal em tão grande escala." major="Bióloga Conservacionista" />

                <Reviews image="\images\emmanuel-yeboah-okine-DzAFv1iVMGg-unsplash.webp" title="Oscar Ribeiro" text="A dedicação da equipe aos cuidados dos animais é evidente em cada detalhe. Os recintos são amplos, bem planejados e proporcionam excelentes condições para o desenvolvimento das espécies." major="Veterinário de Fauna Silvestre"/>

                <Reviews image="\images\joseph-gonzalez-iFgRcqHznqg-unsplash.webp" title="Alexandro Sorriso" text="Levei meus alunos para uma visita educativa e o resultado foi extraordinário. As atividades interativas e a riqueza de informações despertaram o interesse das crianças pela ciência e pela conservação da natureza." major="Professora de Ciências" />
            </section>

        </>
    )
}