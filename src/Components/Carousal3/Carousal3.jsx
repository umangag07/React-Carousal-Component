import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import styled from "styled-components";
import "./Carousal.css";
import {CgArrowRightO,CgArrowLeftO} from "react-icons/cg"
const CarousalWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  display: flex;
  flex-direction: column;
`;
export const HeadingContainer = styled.div`
  width: 100%;
  height: 10vh;
  /* border: 1px solid red; */
  align-items: center;
  display: flex;
  h1 {
    margin-left: 1rem;
    color: #3d2856;
    font-size: 2.6rem;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 468px) {
      font-size: 1.5rem;
    }
  }
`;
const ArrowCompoennt = styled.div`
    position: absolute;
    cursor: pointer;
    z-index: 10;
    color: #3d2856;
    right:${props=>props.right?'2%':''};
    left:${props=>props.right?'':'2%'};
    top:50%;
    font-size: 2rem;
    transition: 0.09s ease-in-out;
    :hover{
        transition: transform(400ms);
        color:white;
    }
`;
const CardWrapper = styled.div`
    transform: ${props=>props.active?'scale(1)':'scale(0.6)'};
    opacity:${props=>props.active?1:0.7};
    transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

function Carousal3(props) {
  const { card_data } = props;
  const [cardIndex, setCardIndex] = useState(0)
  const [noOfSlide, setNoOfSlide] = useState(5)
    
    useEffect(()=>{
        window.addEventListener("resize",setSlides);
    },[])
  
  const setSlides = ()=>{
      if(window.innerWidth === 768){
        setNoOfSlide(3);
      }else if(window.innerWidth <= 468 ){
        setNoOfSlide(1);
      }
      else if(window.innerWidth >= 768 ){
        setNoOfSlide(5);
      }
  }
  const NextArrow = ({ onClick }) => {
    return (
      <ArrowCompoennt onClick={onClick} right={true}>
        <CgArrowRightO />
      </ArrowCompoennt>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <ArrowCompoennt onClick={onClick} right={false}>
        <CgArrowLeftO />
      </ArrowCompoennt>
    );
  };
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: noOfSlide,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange:(current,next)=>setCardIndex(next)
  };
  return (
    <CarousalWrapper>
         <HeadingContainer>
        <h1>Featured Courses</h1>
      </HeadingContainer>
      <Slider {...settings}>
        {card_data.map((card, index) => {
          return (
              <CardWrapper active={index===cardIndex?true:false}>
            <Card
              heading={card.heading}
              price={card.price}
              image={card.image}
              active={false}
            />
            </CardWrapper>
          );
        })}
      </Slider>
    </CarousalWrapper>
  );
}

export default Carousal3;
