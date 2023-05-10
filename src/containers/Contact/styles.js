import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
h1 {
    color: #fff;
    font-size: 60px;
    margin: 50px 0 5px;
  }
  p {
    color: #fff;
    font-size: 18px;
    margin-bottom: 200px;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 50px;

  img {
    width: 200px;
    border-radius: 20px;
    &:hover {
      transform: rotateZ(360deg);
      transition: transform 1s ease;
    }
  }
`