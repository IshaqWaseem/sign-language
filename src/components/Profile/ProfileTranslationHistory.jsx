import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
const ProfileTranslationHistory = ({translations}) => {
    let lastTen = translations
    if (translations.length>10){
        lastTen = translations.slice(Math.max(translations.length - 10, 1))}
    const translationList =  lastTen.map((translation,index) => <ProfileTranslationHistoryItem key={index + '-' + translation} translation={translation} />)
    return (
        <section>
            <h4>Your translations history</h4>
            <ul>
                {translationList}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory