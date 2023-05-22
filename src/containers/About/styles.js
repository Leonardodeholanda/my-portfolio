import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1 { 
        font-size: 60px;
        text-align: center;
    }
    .about {
        color: #fff;
        margin-bottom: 10px;
        width: 70%;
        text-align: center;
    }
    h2 {
        text-align: center;    
    }
`
export const DownContainer = styled.div`
    display: flex;
    height: 100%;
    @media (max-width: 1250px) {
        flex-direction: column;
    }
    div {
        display: flex;
        flex-direction: column; 
        height: auto;
        width: 33%;
        padding: 20px;
        background-color: #66493d;
        background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
        margin: 20px;
        border-radius: 50px;
        color: #fff;
        h2 {
            margin-bottom: 40px;
            background-color: #fff;
            padding: 10px 20px;
            border-radius: 30px;
            color: #190207;
        }
        @media (max-width: 1250px) {
            width: 90%;
        }
    }
`
