import styled from "styled-components";

export const CarousalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
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

export const SliderContainer = styled.div`
  /* border: 1px solid yellow; */
  max-width: 100vw;
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  -moz-window-dragging: initial;


`;

export const SliderContainerWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  transform: translateX(-30%);
  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;


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
