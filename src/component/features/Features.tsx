import React from "react";
import Cards from "../features-cards/Cards";
import { connect } from "react-redux";
import { fetchFeat } from "../../redux";
import "./Features.css";
import {reduxModel} from '../../model'
type props={
featData:reduxModel,
}


// import expstaff from "../images/expstaff.jpg";
// import elib from "../images/elib.jpg";
// import schoolbus from "../images/schoolbus.jpg";
// import otheract from "../images/otheract.jpg";

// function Features() {
//   const [featItems, setFeatItems]=useState([])
//   const fetchFeactures=async()=>{
//     const response=await fetch("http://localhost:3001/feactures")
//     setFeatItems(await response.json())
//     // console.log(await response.json())
//   }
//   useEffect(()=>fetchFeactures(),[])

function Features({featData}:props) {
  return (
    <div>
      <h2 className="feat">Our Feactures</h2>
      <div className="wrapper">
      
        {featData &&
          featData.feat &&
           featData.feat.feat.map((feat,ind) => (
            <Cards
              img={feat.img}
              title={feat.title}
              description={feat.description}
              key={ind}
            />
          ))}
      </div>
    </div>
  );

}
const mapStateToProps = (state:reduxModel) => {
   return {
    featData: state,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchFeat: () => dispatch(fetchFeat()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Features);
