import aboutUsImg from '../images/baking.jpg';
import SectionComponent from './SectionComponent';
import styled from 'styled-components';


// const AboutUs = () => {
//     return (
//         <SectionComponent title={aboutUsTitle} spanText={aboutUsSpan} bgImage={aboutUsImg} span={'6'} shading={true} id={'aboutUsSection'} textUnder={true} />
//     )
// }

const SectionWrapper = styled.div`
    grid-column: span 6;
    /* Denna måste lösas */
    width: 100%;
    height: 0;
    margin-top: 71px;
    padding-top: 99.5%;
    position: relative;
    border-radius: 5px;

    h2 {
        margin: 0;
        padding-top: 20px;
        font-size: 60px;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.7);
    }

    p {
        color: white;
        text-align: center;
        line-height: 1.6;
        margin-top: 0;
        margin-bottom: .5rem;
        font-size: 1em;
        padding: 0 10px;
        font-weight: 600;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);
    }

    @media(max-width: 1000px) {
        grid-column: span 12;
        margin-top: 50px;
        display: ${props => props.hideOnMobile && 'none'};
        border-radius: 0;
    }
`;

const SectionContent = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-image: url(${aboutUsImg});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    white-space: pre-line;

    h2 {
        margin: 0;
        padding-top: 20px;
        font-size: 60px;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.7);
    }

    p {
        color: white;
        text-align: center;
        line-height: 1.6;
        margin-top: 0;
        margin-bottom: .5rem;
        font-size: 1em;
        padding: 0 10px;
        font-weight: 600;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);
    }
`;

const BlurContainer = styled.div`
   position: relative;
`;

const BlurContainerList = styled.div`
    mix-blend-mode: multiply;
    content: "";
    background: rgba(0,0,0,.6);
    position: absolute;
    filter: blur(70px);
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    filter: blur(120px);
`;

const AboutUs = () => {
    return (<>
        <SectionWrapper >
            <SectionContent>
                <BlurContainer />
                <BlurContainerList />
                {/* Detta är istället för alt-tagg för bakgrundsbilden */}
                <span className="background-image" role="img" aria-label="[Här får vi skicka in en prop]"></span>
            </SectionContent>
        </SectionWrapper>
    </>
    )
}

export default AboutUs;