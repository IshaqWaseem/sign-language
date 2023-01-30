import TranslationSignsItem from "./TranslationSignsItem"
const TranslationSigns = ({signs}) => {
    const signList =  signs.map((sign,index) => <TranslationSignsItem key={index} sign={sign} />)
    return (
        <section>
            <h4>Your signs</h4>
            <ul>
                {signList}
            </ul>
        </section>
    )
}
export default TranslationSigns