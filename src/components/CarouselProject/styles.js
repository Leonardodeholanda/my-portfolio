import styled from "styled-components";

export const Container = styled.div`
    width: 80vw;
    .rec.rec-carousel-item {
        width: 100%;
    }
    .rec.rec-arrow {
        width: 100px;
        height: 100%;
        border: 4px solid #66493d;
        border-radius: 40px;
        margin: 0 10px;
        background-color: #190207;
        color: #66493d;
        font-size: 40px;
        cursor: pointer;}
    
     .rec.rec-arrow:hover {
        border: 4px solid #fff;
        background-color: #66493d;
        background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
        color: #fff;
      }
      .rec.rec-dot {
        background-color: #66493d;
        border: 2px solid #fff;
        box-shadow: 0 0 5px #fff,
                 0 0 10px #fff, 
                 0 0 20px #fff,   
                 0 0 55px #fff, 
                 0 0 70px #fff; 
                 margin-top: 10px;
      }
      `

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: #66493d;
    background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
`

export const Image = styled.img`
    width: 60%;
`

export const Text = styled.p`
    font-size: 20px;
    width: 85%;
    color: #fff;
`