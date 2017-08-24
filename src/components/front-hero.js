import React from 'react'
import styled from 'styled-components'
import { Flex, Box} from 'grid-styled'
import frontHero from 'images/polygon-bg.png'


const Hero = styled(Flex)`
  max-width: none;
  background: url(${frontHero}) center center;
  background-repeat: repeat-x;
  min-height: 27rem;
  
  justify-content: center;
`


export default Hero
