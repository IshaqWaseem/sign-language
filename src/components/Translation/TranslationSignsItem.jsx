const TranslationSignsItem = ({sign}) => {
    //image files are named after letters so we can simply add it to URL
    const imageSign =`/individial_signs/${sign}.png`
    return <img alt={imageSign} height="75px" width="75px" src={imageSign} />
}
export default TranslationSignsItem