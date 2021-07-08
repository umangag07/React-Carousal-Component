import Carousel from "react-multi-carousel";
import styled from "styled-components"

export const Carousal = styled(Carousel)`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
`
export const CarousalWrapper = styled.div`
  display: flex;
`
export const ArrowContainer = styled.div`
  position: absolute;
  align-items: center;
  z-index: 99;
  cursor: pointer;
  display: flex;
  font-size: 3rem;
  margin-top: 40vh;
  color:#3D2856;
  right: ${(props) => (props.right ? 0 : null)};
  left: ${(props) => (props.left ? 0 : null)};
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 468px) {
    font-size: 2rem;
  }
   :hover{
        color:#4B4452;
        border-radius: 50%;
        border: 1px solid #4B4452;
        transition: 0.09s ease-in-out
   }

`;
