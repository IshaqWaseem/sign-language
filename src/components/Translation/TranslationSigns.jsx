import TranslationSignsItem from "./TranslationSignsItem"
const TranslationSigns = ({signs}) => {
    const signList =  signs.map((sign) => <TranslationSignsItem key={sign} sign={sign} />)
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