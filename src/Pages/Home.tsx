import Image from "../Components/Image"
import "../media/backgrounds/horserunning.jpg"
import "../Components/CompStyles.css"

const Home = () => {

    const pickHomeImg = () => {
        return '../media/backgrounds/horserunning.jpg'
    }

    return (
        <Image filelink={ pickHomeImg() } classdata="BGImage" alttext="Image"/>
    );
};
export default Home;