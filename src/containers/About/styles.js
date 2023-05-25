import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const UpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 { 
        color: #fff;
        font-size: 60px;
    }
    h2 {
        color: #fff;
        font-size: 30px;
        margin-bottom: 20px;
    }
    p {
        color: #fff;
        font-size: 18px;
        width: 70%;
    }
`
export const DownContainer = styled.div`
    display: flex;
    @media (max-width: 1250px) {
        flex-direction: column;
    }
    div {
        display: flex;
        flex-direction: column; 
        align-items: center;
        width: 33%;
        padding: 20px;
        background-color: #66493d;
        background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
        margin: 20px;
        border-radius: 50px;
        color: #fff;
        h2 {
            background-color: #fff;
            padding: 10px 20px;
            border-radius: 30px;
            color: #190207;
            width: max-content;
            margin: 0 auto 40px;
        }
        p {
            width: 90%;
            text-align: center;
        }
        @media (max-width: 1250px) {
            width: 90%;
        }
    }
`
