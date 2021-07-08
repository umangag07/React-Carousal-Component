import styled from "styled-components"

export const CardContainer = styled.div`
    min-width:20vw;
    max-width:20vw;
    height:55vh;
    display: flex;
    flex:1;
    position: relative;
    flex-direction: column;
    background-color: white;
    border-radius: 3%;
    transition: opacity 300ms linear, transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
    @media screen and (max-width: 768px) {
        min-width:30vw;
        max-width:30vw;
    };
    @media screen and (max-width: 468px) {
        min-width:80vw;
        max-width:80vw;
        height:50vh;
        margin:0 0.5rem 0 0.5rem;
    }
    @media screen and (max-width: 348px) {
        min-width:70vw;
        max-width:70vw;
        
    }

`;

export const ImageContainer = styled.div`
    width:100%;
    height:55%;
    /* border:1px solid red;     */
    img{
        height:100%;
        width:100%;
        border-radius: 3% 3% 0 0;

    }
`;
export const HeadingContainer = styled.div`
    width:100%;  
    height:15%;
    display: flex;
    justify-content: flex-start;
    padding:0;
    /* border:1px solid orange;  */
    align-items: center;
    h1{
        font-size: 1.2rem;
        margin:0 0.5rem 0 0.5rem;
        /* font-family: 'Poppins', sans-serif;  */
        font-family: 'Comfortaa', cursive;
        color:#3D2856;
    }
`;
export const PriceContainer = styled.div`
    width:100%;
    height:15%;  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* border:1px solid yellow;  */
    h2{
        font-size: 1rem;
        margin-left: 0.5rem;
        font-family: 'Comfortaa', cursive;
        color:#4B4452;
    }
`;

export const ButtonContainer = styled.div`
    width:100%;
    height:15%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border:1px solid green; */
    button{
        margin-left: 0.5rem;
        width:6rem;
        height:2.5rem;
        font-family: 'Poppins', sans-serif;
        background-color: #354A54;
        color:whitesmoke;
        border:none;
        border-radius: 5%;
    } 
`;



