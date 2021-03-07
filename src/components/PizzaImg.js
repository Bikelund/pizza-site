import pizzaImg from '../images/pizza-img.jpg';
import SectionComponent from './SectionComponent';

const PizzaImg = () => {
    return (
        <SectionComponent bgImage={pizzaImg} span={'5'} marginTop={'-390px'} paddingTop={'86.5%'} hideOnMobile={true}/>
    )
}

export default PizzaImg;