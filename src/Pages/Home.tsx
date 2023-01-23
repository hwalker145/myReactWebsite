import Image from "../Components/Image"
import "../Components/CompStyles.css"
import horse from "../media/backgrounds/horserunning.jpg"


const Home = () => {

    const pickHomeImg = () => {
        return "horserunning.jpg"
    }

    return (
        <Image filelink={ horse } classdata="BGImage" alttext="Image"/>
    );
};
export default Home;