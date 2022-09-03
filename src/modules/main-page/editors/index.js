import Moon from "assets/moon.png"
import ImageLink from "components/image-link"
import Text from "components/text"
import './styles.css'


const Editors = ({ className }) => {
    return (
        <ImageLink>
            <Text className="title-editors" text="équipe éditoriale"/>
            <img src={Moon} />
        </ImageLink>       
    )
}

export default Editors

