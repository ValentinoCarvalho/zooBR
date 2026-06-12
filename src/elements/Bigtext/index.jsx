import "./Bigtext.css"

export const Bigtext = (props)=>{
    return(

        <>
        
        <section className="bigtext">
            <h3 style={{color:props.color}}>{props.text}</h3>
        </section>
        
        </>

    )
}