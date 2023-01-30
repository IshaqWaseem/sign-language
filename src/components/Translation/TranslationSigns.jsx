import TranslationSignsItem from "./TranslationSignsItem"
const TranslationSigns = ({signs}) => {
    //send the array prop to map in component so images will be returned 
    const signList =  signs.map((sign,index) => <TranslationSignsItem key={index} sign={sign} />)
    return (
        <section>
            <ul>
                {signList}
            </ul>
        </section>
    )
}
export default TranslationSigns