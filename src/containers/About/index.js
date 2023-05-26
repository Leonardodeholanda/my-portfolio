import React from 'react'
import { Container, DownContainer, UpContainer } from './styles'

export function About() {
  return (
    <Container>
      <UpContainer>
      <h1>ABOUT</h1>
      <h2>I'm <b>Leonardo de Holanda,</b> Front-End Developer</h2>
      <p>As a highly motivated developer, I am passionate about coding, learning, and creating. I am willing to staying up-to-date with the latest technologies and industry best practices, and i am always eager to expand my skillset to achieve mutual growth.</p>
      <p>In addition to my technical abilities, I excel at working collaboratively with teams and communicating effectively with individuals from diverse backgrounds. I am committed to utilizing my skills and passion for coding to make meaningful contributions to any project or organization I work with.</p>
      </UpContainer>
      <DownContainer>
        <div>
          <h2>Formation</h2>
          <h4>DEV CLUB - FULL STACK - FEB/2023 - MAY/2023</h4>
          <p>Complete training in Full Stack development, including HTML, CSS, Javascript, React, Reactive Native, Node, relational and non-relational databases, and Docker</p>
          <p>Participation in several practical projects to apply the acquired theoretical knowledge.</p>
          <h4>UNIFG - AUG/2019 - JUL/2023</h4>
          <p>Bachelor's Degree in Physical Education.</p>
        </div>
        <div>
          <h2>Experience</h2>
          <h4>Freelancer - JAN/2023 - Current</h4>
          <p>I develop projects using JavaScript, CSS, HTML, React, Styled-components, NodeJS, Git/Github, Yarn, NPM, REST API, Docker, Postgres, MongoDB, Nodemon, Sucrase and Sequelize</p>
          <h4>Crossfit Coach - FEV/2020 - MAR/2023</h4>
          <p>I was able to acquire the ability to convey information clearly and objectively to the public, facilitating understanding and learning. In addition to valuable communication, teamwork and problem-solving skills</p>
        </div>
        <div>
          <h2>What I Do?</h2>
          <p>I develop projects to create creative and effective solutions. I have communication skills, teamwork and problem solving, always looking to update myself in the tech world. With passion, dedication and a strong work ethic, I am excited to take on new challenges and opportunities.</p>
        </div>
      </DownContainer>
    </Container>
  )
}
