import React from 'react'
import {CardContainer,ImageContainer,HeadingContainer,PriceContainer,ButtonContainer} from './CardComponents'

function Card(props) {
    const {heading,price,image,active} = props
    return (
        <CardContainer active={active}>
            <ImageContainer>
                <img src={image} alt="crs" />
            </ImageContainer>
            <HeadingContainer>
                <h1>{heading}</h1>
            </HeadingContainer>
            <PriceContainer>
                <h2>Full Course price: {price}</h2>
            </PriceContainer>
            <ButtonContainer>
                <button>Know more</button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default Card
