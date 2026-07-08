import './GoodHero.css'
export const GoodHero = (props) => {

    return (<section className="educationText">

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