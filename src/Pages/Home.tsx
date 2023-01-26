import Image from "../Components/Image"
import Card from "../Components/Card"
import Sidebar from "../Components/Sidebar"
import "../Components/CompStyles.css"
import bgimg from "../media/backgrounds/horserunning.jpg"

const Home = () => {

    const pickHomeImg = (): string => {
        return bgimg
    }

    return (
        <>
            <Image filelink={pickHomeImg()} classdata="backgroundimage" alttext="Image"/>
            <Sidebar>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Sidebar>
        </>
    );
};
export default Home;