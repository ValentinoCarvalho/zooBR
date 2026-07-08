import './HeroNoPhoto.css'

export const HeroNoPhoto = (props) => {
    return (
        <>
        <section className='heroNoPhoto'>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.textOne}
            </p>
            <p>
                {props.textTwo}
            </p>
            <p>
                {props.textThree}
            </p>
            </section>
        </>
    )
}