// import Carousal1 from "./Components/Carousal/Carousal1.jsx";
import { card_data } from "./Components/Card/CardData";
import "react-multi-carousel/lib/styles.css";
// import Carousal2 from "./Components/Carousal2/Carousal2.jsx";
import Carousal3 from "./Components/Carousal3/Carousal3.jsx";
function App() {
  return (
    <>
      {/* <Carousal1 CardData={card_data} /> */}
      {/* <Carousal2 card_data={card_data}/> */}
      <Carousal3 card_data={card_data}/>
    </>
  );
}

export default App;
