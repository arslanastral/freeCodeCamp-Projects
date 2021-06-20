import React from "react";
import styled from "styled-components";
import { CalculatorContext } from "./CalculatorBoard";

const EasterEggContainer = styled.div`
  width: 382px;
  height: 682px;
  margin-left: 10px;
  animation: ${({ skinUnlocked }) =>
    skinUnlocked === "Dramatic...PAUSE!" ? "zoomOut 2s" : "jackInTheBox 2s"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CalculonEyes = styled.rect`
  animation: pulse 1s infinite;
`;

const EggFoundTitle = styled.span`
  font-family: "Inter", sans-serif;
  margin: 0 0 40px 0;
  font-weight: 200;
  font-size: 1.8rem;
  height: 100px;
  width: 90%;
  color: white;
  animation: tada 1s;
  animation-delay: 2s;
  user-select: none;
`;

const ClaimRewardButton = styled.button`
  font-family: "Inter", sans-serif;
  margin-top: 40px;
  font-weight: 600;
  font-size: 1.5rem;
  padding: none;
  border: none;
  background-color: blue;
  padding: 0.5rem 0.5rem;
  border-radius: 20px;
  color: white;
  width: 50%;
  touch-action: manipulation;
  animation: pulse 1s;
  animation-iteration-count: infinite;
  animation-delay: 3s;
  transition: all ease-out 0.08s;
  cursor: pointer;

  &:after {
    content: "Claim";
  }

  &:active {
    transform: scale(0.9);
  }
`;

const EasterEggCal = () => {
  const {
    seteasteregg,
    setskinUnlocked,
    setexpression,
    skinUnlocked,
  } = React.useContext(CalculatorContext);

  const handleEasterEggFound = () => {
    setskinUnlocked("Dramatic...PAUSE!");
    setexpression("");

    setTimeout(() => {
      seteasteregg(false);
    }, 1000);
  };

  return (
    <EasterEggContainer skinUnlocked={skinUnlocked}>
      <EggFoundTitle aria-label="easteregg found title">
        {`You found Calculon! Here are some shiny new skins as a reward ✨`}
      </EggFoundTitle>
      <svg
        width="382"
        height="389"
        viewBox="0 0 382 389"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.9489 115.181L13.6632 21.6167L40.4678 112.705C40.3713 112.764 40.2634 112.829 40.1447 112.897C39.543 113.246 38.6679 113.702 37.5872 114.122C35.5744 114.903 32.8924 115.545 29.9489 115.181Z"
          fill="#CC9505"
          stroke="black"
          strokeWidth="2"
        />
        <circle
          cx="11.3578"
          cy="11.3579"
          r="7.08693"
          transform="rotate(-51.7311 11.3578 11.3579)"
          fill="#FECE19"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M35.9515 373.15V260.428H38.4936H39.5426L39.4924 259.38L39.4312 258.099V205.941H39.4448H39.4572H39.4597H39.4746H39.4888H39.4896H39.5045H39.5195H39.5199H39.5345H39.5495H39.5507H39.5645H39.5795H39.5809H39.5945H39.6095H39.6107H39.6244H39.6394H39.6401H39.6544H39.669H39.6694H39.6843H39.6974H39.6992H39.7142H39.7255H39.7291H39.7439H39.753H39.7588H39.7736H39.7802H39.7884H39.8032H39.8069H39.8179H39.8326H39.8332H39.8473H39.859H39.8619H39.8765H39.8844H39.891H39.9055H39.9094H39.9199H39.934H39.9343H39.9486H39.9582H39.9629H39.9771H39.9819H39.9913H40.0052H40.0054H40.0194H40.0281H40.0334H40.0473H40.0506H40.0611H40.0727H40.0749H40.0885H40.0943H40.1021H40.1156H40.1291H40.1364H40.1424H40.1557H40.1569H40.1688H40.177H40.1819H40.1949H40.1966H40.2078H40.2159H40.2206H40.2332H40.2348H40.2458H40.2532H40.2583H40.2707H40.2713H40.2829H40.289H40.2951H40.3064H40.3071H40.319H40.3233H40.3308H40.3399H40.3425H40.3541H40.3561H40.3655H40.3719H40.3768H40.3873H40.388H40.399H40.4024H40.4099H40.4171H40.4206H40.4313H40.4315H40.4418H40.4455H40.4521H40.4591H40.4623H40.4723H40.4822H40.4852H40.492H40.4978H40.5015H40.51H40.511H40.5202H40.5219H40.5294H40.5334H40.5383H40.5445H40.5471H40.5553H40.5557H40.5641H40.5658H40.5724H40.576H40.5805H40.5858H40.5884H40.5952H40.5961H40.6036H40.6044H40.611H40.6132H40.6182H40.6217H40.6252H40.6298H40.632H40.6377H40.6386H40.645H40.6452H40.6512H40.6524H40.6572H40.6593H40.663H40.6658H40.6686H40.6721H40.674H40.678H40.6792H40.6837H40.6842H40.6889H40.6935H40.6941H40.6978H40.6988H40.7019H40.7032H40.7058H40.7074H40.7094H40.7112H40.7129H40.7148H40.7161H40.7181H40.719H40.7211H40.7218H40.7238H40.7243H40.7262H40.7265H40.7283H40.7285H40.7303H40.7318H40.7331H40.7341H40.7349H40.7354H40.7357L40.7357 203.941H40.7355H40.735H40.7342H40.7331H40.7318H40.7302H40.7285H40.7283H40.7265H40.7262H40.7243H40.7238H40.7218H40.7211H40.719H40.7181H40.7161H40.7148H40.7129H40.7112H40.7094H40.7074H40.7058H40.7032H40.7019H40.6988H40.6978H40.6941H40.6935H40.689H40.6842H40.6837H40.6792H40.678H40.674H40.6721H40.6686H40.6658H40.663H40.6593H40.6572H40.6524H40.6512H40.6452H40.645H40.6386H40.6377H40.632H40.6298H40.6252H40.6217H40.6182H40.6132H40.611H40.6044H40.6036H40.5961H40.5952H40.5884H40.5858H40.5805H40.576H40.5724H40.5658H40.5641H40.5557H40.5553H40.5471H40.5445H40.5383H40.5334H40.5294H40.5219H40.5202H40.511H40.51H40.5015H40.4978H40.492H40.4852H40.4822H40.4723H40.4623H40.4591H40.4521H40.4455H40.4418H40.4315H40.4313H40.4206H40.4171H40.4099H40.4024H40.399H40.388H40.3873H40.3768H40.3719H40.3655H40.3561H40.3541H40.3425H40.3399H40.3308H40.3233H40.319H40.3071H40.3064H40.2951H40.289H40.2829H40.2713H40.2707H40.2583H40.2532H40.2458H40.2348H40.2332H40.2206H40.2159H40.2078H40.1966H40.1949H40.1819H40.177H40.1688H40.1569H40.1557H40.1424H40.1364H40.1291H40.1156H40.1021H40.0943H40.0885H40.0749H40.0727H40.0611H40.0506H40.0473H40.0334H40.0281H40.0194H40.0054H40.0052H39.9913H39.9819H39.9771H39.9629H39.9582H39.9486H39.9343H39.934H39.9199H39.9094H39.9055H39.891H39.8844H39.8765H39.8619H39.859H39.8473H39.8332H39.8326H39.8179H39.8069H39.8032H39.7884H39.7802H39.7736H39.7588H39.753H39.7439H39.7291H39.7255H39.7142H39.6992H39.6974H39.6843H39.6694H39.669H39.6544H39.6401H39.6394H39.6244H39.6107H39.6095H39.5945H39.5809H39.5795H39.5645H39.5507H39.5495H39.5345H39.5199H39.5195H39.5045H39.4896H39.4888H39.4746H39.4597H39.4572H39.4448H39.4299H39.4251H39.4151H39.4002H39.3925H39.3854H39.3706H39.3595H39.3559H39.3412H39.3265H39.3261H39.3118H39.2972H39.2921H39.2827H39.2682H39.2577H39.2537H39.2393H39.225H39.2228H39.2107H39.1964H39.1875H39.1822H39.1681H39.154H39.1516H39.14H39.1261H39.1153H39.1123H39.0985H39.0848H39.0785H39.0711H39.0576H39.0441H39.0412H39.0307H39.0174H39.0042H39.0034H38.9911H38.9781H38.9652H38.9523H38.9396H38.927H38.9264H38.9144H38.902H38.8897H38.8872H38.8775H38.8654H38.8534H38.8474H38.8416H38.8299H38.8182H38.8072H38.8068H38.7954H38.7842H38.7731H38.7664H38.7621H38.7513H38.7406H38.73H38.7252H38.7196H38.7094H38.6993H38.6893H38.6834H38.6795H38.6698H38.6603H38.651H38.6418H38.6412H38.6328H38.6239H38.6152H38.6067H38.5984H38.5902H38.5822H38.5744H38.5668H38.5593H38.5551H38.5521H38.545H38.5381H38.5314H38.5249H38.5186H38.5125H38.5113H38.5066H38.5009H38.4954H38.4901H38.4851H38.4802H38.4756H38.4711H38.467H38.4629H38.4592H38.4556H38.4523H38.4493H38.4464H38.4438H38.4414H38.4393H38.4374H38.4358H38.4344H38.4332H38.4323H38.4317H38.4313H38.4312H38.4222H38.3768H38.331H38.2846H38.2376H38.1902H38.1422H38.0937H38.0446H37.995H37.9449H37.8942H37.843H37.7912H37.7389H37.686H37.6326H37.5786H37.524H37.4689H37.4312H37.4132H37.357H37.3002H37.2428H37.1849H37.1263H37.0672H37.0076H36.9473H36.8864H36.825H36.763H36.7004H36.6372H36.5734H36.509H36.444H36.3784H36.3121H36.2453H36.1779H36.1099H36.0412H35.972H35.9021H35.8316H35.7605H35.6887H35.6163H35.5433H35.4697H35.3954H35.3205H35.245H35.1688H35.092H35.0145H34.9364H34.8576H34.7782H34.6981H34.6174H34.536H34.454H34.3713H34.2879H34.2038H34.1191H34.0337H33.9477H33.861H33.7735H33.6854H33.5967H33.5072H33.417H33.3262H33.2347H33.1424H33.0495H32.9559H32.8615H32.7665H32.6708H32.5743H32.4772H32.3793H32.2807H32.1814H32.0814H31.9807H31.8792H31.777H31.6741H31.5704H31.4661H31.3609H31.2551H31.1485H31.0411H30.9331H30.8242H30.7146H30.6043H30.4932H30.3814H30.2688H30.1554H30.0413H29.9264H29.8108H29.6944H29.5772H29.4592H29.3405H29.221H29.1007H28.9796H28.8577H28.7351H28.6116H28.4874H28.3624H28.2365H28.1099H27.9825H27.8543H27.7252H27.5954H27.4647H27.3333H27.201H27.0679H26.934H26.7993H26.6637H26.5273H26.3901H26.2521H26.1132H25.9735H25.833H25.6916H25.5494H25.4063H25.2624H25.1176H24.972H24.8256H24.6783H24.5301H24.381H24.2312H24.0804H23.9288H23.7763H23.6229H23.4687H23.3136H23.1576H23.0007H22.8429H22.6843H22.5248H22.3644H22.2031H22.0409C18.6733 203.941 16.2509 203.37 14.5468 202.45C12.8662 201.541 11.8359 200.268 11.2684 198.734C10.1006 195.579 10.8471 191.192 12.5696 186.539C14.2715 181.941 16.8354 177.317 18.9885 173.827C20.0626 172.086 21.0292 170.635 21.7265 169.62C22.075 169.113 22.356 168.716 22.5492 168.446C22.6457 168.311 22.7203 168.208 22.7704 168.139L22.8269 168.062L22.8407 168.043L22.8439 168.039L22.8446 168.038C22.8446 168.038 22.8446 168.038 22.8269 168.025L22.8446 168.038L23.2468 167.495L22.8927 166.919L22.8926 166.919L22.8923 166.918L22.8899 166.914L22.8791 166.897L22.834 166.822C22.7938 166.755 22.7337 166.654 22.6557 166.521C22.4996 166.254 22.2721 165.858 21.9895 165.347C21.4243 164.324 20.6396 162.839 19.767 161.002C18.0199 157.323 15.9298 152.251 14.5388 146.651C11.7431 135.396 11.8424 122.381 22.6532 114.007C41.8892 99.1089 75.157 67.9204 84.7244 58.8805C86.2794 57.4112 88.2629 56.5527 90.3902 56.4493C107.265 55.6296 180.91 52.564 272.549 56.3549C276.352 56.5123 279.866 58.4808 281.989 61.6416L323.588 123.568C330.455 133.79 334.122 145.826 334.122 158.14V373.107C333.833 373.163 333.467 373.233 333.027 373.316C331.774 373.552 329.917 373.895 327.505 374.319C322.682 375.169 315.641 376.345 306.775 377.652C289.042 380.266 264.013 383.403 234.832 385.495C176.676 389.663 102.103 389.672 35.9515 373.15Z"
          fill="#FFD016"
          stroke="black"
          strokeWidth="2"
        />
        <rect
          x="28.4657"
          y="104.807"
          width="247.783"
          height="73.1058"
          rx="36.5529"
          fill="black"
        />
        <circle cx="90.5736" cy="141.036" r="27.172" fill="#D1FF9E" />
        <CalculonEyes
          x="86.0447"
          y="136.507"
          width="9.70429"
          height="9.70429"
          fill="black"
        />
        <circle cx="210.906" cy="141.036" r="27.172" fill="#D1FF9E" />
        <CalculonEyes
          x="206.378"
          y="136.507"
          width="9.70429"
          height="9.70429"
          rx="1"
          fill="black"
        />
        <path
          d="M37.2291 204.796H269.781C284.949 204.796 297.245 217.092 297.245 232.26C297.245 247.428 284.949 259.724 269.781 259.724H37.2291V204.796Z"
          fill="#D1FF9E"
          stroke="black"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="56.9315"
          y2="-1"
          transform="matrix(0 -1 0.999998 0.00209689 72.8016 260.721)"
          stroke="black"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="56.9315"
          y2="-1"
          transform="matrix(0 -1 0.999998 0.00209689 220.611 260.721)"
          stroke="black"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="56.9315"
          y2="-1"
          transform="matrix(0 -1 0.999998 0.00209689 257.487 260.721)"
          stroke="black"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="56.9315"
          y2="-1"
          transform="matrix(0 -1 0.999998 0.00209689 109.678 260.721)"
          stroke="black"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="56.9315"
          y2="-1"
          transform="matrix(0 -1 0.999998 0.00209689 146.554 260.721)"
          stroke="black"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="56.9315"
          y2="-1"
          transform="matrix(0 -1 0.999998 0.00209689 183.734 260.721)"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M309.154 123.854L368.254 73.2168L318.547 133.08C318.431 133.007 318.302 132.926 318.162 132.834C317.47 132.385 316.503 131.714 315.417 130.831C313.395 129.187 310.988 126.836 309.154 123.854Z"
          fill="#CC9505"
          stroke="black"
          strokeWidth="2"
        />
        <circle
          cx="373.616"
          cy="68.2538"
          r="7.08693"
          fill="#FECE19"
          stroke="black"
          strokeWidth="2"
        />
      </svg>

      <ClaimRewardButton
        aria-label="claim reward"
        {...(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          navigator.userAgent
        )
          ? { onTouchStart: handleEasterEggFound }
          : { onMouseDown: handleEasterEggFound })}
      />
    </EasterEggContainer>
  );
};

export default EasterEggCal;
