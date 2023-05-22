import React, {useMemo} from 'react'
import Carousel from 'react-elastic-carousel'
import projectsList from './projectsList'
import { Image, Text, Container, ContainerItems } from './styles'

  export function CarouselProject() {
    const renderProjects = useMemo(()=> projectsList.map((project) => (
      <ContainerItems key={project.id}>
      <Image src={project.image} alt={project.alt}/>
      <Text>{project.description}</Text>
      </ContainerItems>
    )), [])

    return (
      <Container>
        <Carousel 
      itemsToShow={1}
      enableMouseSwipe={false}
      >
        {renderProjects}
      </Carousel>
      </Container>
    )
  }