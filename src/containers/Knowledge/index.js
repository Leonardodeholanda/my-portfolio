import React from 'react'
import { Container, ContainerItems, ContainerTech, ContainerLang, ContainerImage, Image, Title } from './styles'

export function Knowledge() {
  return (
    <Container>
      <h1>KNOWLEDGE</h1>
      <ContainerItems>
        <ContainerTech>
          <Title>TECHNOLOGIES AND TOOLS</Title>
          <ContainerImage>
            <Image src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html-logo" />
            <Image src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css-logo" />
            <Image src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="js-logo" />
            <Image src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react-logo" />
            <Image src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="node-logo" />
            <Image src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-logo" />
            <Image src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="mui-logo" />
            <Image src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="router-logo" />
            <Image src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres-logo" />
            <Image src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongo-logo" />
            <Image src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" alt="sequelize-logo" />
            <Image src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" alt="json-logo" />
            <Image src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint-logo" />
            <Image src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="pretier-logo" />
          </ContainerImage>
        </ContainerTech>
        <ContainerLang>
          <Title>LANGUAGES</Title>
          <p>Exchange program in Dublin, Ireland with a focus on <b>studying English.</b> During 11 months, I dedicated myself to studying the English language and <b>finished the course at the highest possible level.</b> Additionally, I took the <b>IELTS</b> test and <b>scored a 7</b>, demonstrating my high degree of <b>fluency in the language.
          </b></p>
        </ContainerLang>
      </ContainerItems>
    </Container>
  )
}
