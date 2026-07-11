import './GoodHero.css'
export const GoodHero = (props) => {
    return(
    props.right === true ?

        <section className="educationText">
            <div className="textPlusImg">
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="educationalImg" >
                    <img src={props.image} alt="" />
                </div>
            </div>
        </section>
        :
        <section className="educationText">
            <div className="textPlusImg">
                <div className="educationalImg" >
                    <img src={props.image} alt="" />
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </section>)


}