import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 50px;
    h1 {
        font-size: 60px;
        color: #fff
    }
`
export const ContainerItems = styled.div`
    display: flex;
    color: #fff;
    background-color: #66493d;
    background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
    border-radius: 50px;
    gap: 30px;
    padding: 20px;
`
export const ContainerTech = styled.div`
    display: flex;
    flex-direction: column;    
`
export const ContainerImage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`
export const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 80%;
  &:hover {
      transform: scale(1.1);
    }
`
export const ContainerLang = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 30px;
    p {
        font-size: 20px;
        width: 70%;
        b {
        text-transform: uppercase;
        }
    }
`
export const Title = styled.h2`
    padding: 20px;
    font-size: 30px;
`