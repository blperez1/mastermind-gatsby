import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import styled from "styled-components"

const StyledContainer = styled.div` 
    color: purple;
    > p {
        text-transform: uppercase;
    }
`
export default function Contact() {
    return (
        <StyledContainer>
            <Link to="/">Home</Link>
            <Header headerText="Contact" />
            <p>Send us a message!</p>
        </StyledContainer>
    )
}