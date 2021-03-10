import styled from 'styled-components';
import VisitUsImg from '../images/visit-us.jpg';

const VisitUsWrapper = styled.div`
    background: 
    linear-gradient(
      rgba(251, 205, 205, 0.52), 
      rgba(251, 205, 205, 0.52)
    ),
    url(${VisitUsImg});
    background-size: contain;
    background-repeat: no-repeat;
    grid-column: span 12;
    margin-top: 50px;
    width: 100%;
    height: 0;
    padding-top: 99.5%;
    position: relative;

    @media(min-width: 1000px) {
        grid-column: span 5/13;
        margin-top: 0;
        border-radius: 5px;
    }
`;

const VisitUsContent = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    white-space: pre-line;

    h2{
        margin: 0;
        padding-top: 20px;
        font-size: 60px;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.7);
    }

    span{
        text-align: center;

        p{
            font-weight: 600;
            margin-top: 0;
            margin-bottom: .5rem;
            font-size: 1.5rem;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.7);
            text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5), 0 0 5px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.7);
            
        }
   }
`;

const VisitUs = () => {
    return (
        <VisitUsWrapper id="visitUsSection">
            <VisitUsContent>
                <h2>Besök oss</h2>
                <span><p>{`
                    Södermalm \n`}</p>
                    <p>{`Vartoftagatan 49`}</p>
                </span>
                <span><p>{`
                    Öppet \n `}</p>
                    <p>{`Fre 13-20 \n `}</p>
                    <p>{`Lör 12-20 \n `}</p>
                    <p>{`Sön 12-20`}</p>
                </span>
            </VisitUsContent>
        </VisitUsWrapper >
    )
}

export default VisitUs;