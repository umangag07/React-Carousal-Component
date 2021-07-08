import React,{useState,useEffect} from "react";
import {
  CarousalContainer,
  SliderContainer,
  HeadingContainer,
  ArrowContainer,
  SliderContainerWrapper
} from "./CarousalComponent1";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Card from "../Card/Card";


function Carousal1(props) {
    const {CardData} = props
    const [properties, setProperties] = useState([])
    const [property,setProperty] = useState(CardData[0])

    useEffect(()=>{
        setProperties(CardData)
    },[CardData,property])

    const previousCard = ()=>{
        const newIndex = property.index>=1?property.index-1:properties.length-1;
        setProperty(properties[newIndex])
        console.log(property.index);
        
    }
    const nextCard = ()=>{
        const newIndex = property.index === properties.length-1?0:property.index+1;
        setProperty(properties[newIndex]);
        console.log(property.index);
        
    }
    
  return (
    <CarousalContainer>
      <ArrowContainer right={false} left={true} onClick={previousCard} >
        <MdKeyboardArrowLeft />
      </ArrowContainer>
      <ArrowContainer right={true} left={false} onClick={nextCard}>
        <MdKeyboardArrowRight/>
      </ArrowContainer>
      <HeadingContainer>
        <h1>Featured Courses</h1>
      </HeadingContainer>
      <SliderContainer> 
          <SliderContainerWrapper style={{'transform':`translateX(-${property.index*(100/properties.length)}%)`}}>
        {
            properties.map((card,index)=>{

                return <Card heading={card.heading} price={card.price} image={card.image} active={index === property.index?true:false}/>
            })
        }
        {/* <Card heading={property.heading} price={property.price} image={property.image}/> */}
        </SliderContainerWrapper>
      </SliderContainer>
    </CarousalContainer>
  );
}

export default Carousal1;
