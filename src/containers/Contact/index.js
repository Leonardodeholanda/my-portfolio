import React from 'react'
import { Container, ContainerItems, ContainerText } from './styles'

export function Contact() {
  return (
    <Container>
      <ContainerText>
      <h1>CONTACT</h1>
      <p>Fell, <b>free</b> to contact me!</p>
      </ContainerText>
      <ContainerItems>
        <a href="https://www.linkedin.com/in/leonardo-de-holanda" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin-logo" /></a>
        <a href="https://github.com/Leonardodeholanda"
          target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github-logo" /></a>
          <a href="mailto:leonardohvrocha@gmail.com"
          target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail-logo" /></a>
      </ContainerItems>
    </Container>
  )
}
