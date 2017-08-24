import React, { Component } from 'react'
import logo from 'images/logo.svg'
import 'App.css'
import styled from 'styled-components'
import { Flex, Box} from 'grid-styled'
import Header from 'header'
import SectionTwo from 'front-section-2'
import SectionThree from 'front-section-3'
import MaterialsSection from 'materials-section'
import Footer from 'footer'
import frontHero from 'images/polygon-bg.png'
import m200HeroImage from '../images/M200-package.png'


const Hero = styled(Flex)`
  max-width: none;
  background: url(${frontHero}) center center;
  background-repeat: repeat-x;
  min-height: 27rem;

  justify-content: center;
`

const Container = styled(Box)`
  max-width: 1200px;
  min-height: 27rem;
  flex-direction: row;
  flex-basis: 100%;
  justify-content: center;

`


const HeroImage = styled(Flex)`
  background: url(${m200HeroImage}) center center;
  background-repeat: no-repeat;
  min-height: 600px;
  height: auto;
  vertical-align: middle;
  flex-direction: column;
`
const Headline = styled(Box)`
  text-align: center;
  color: #fff;
  vertical-align: middle;
  justify-content: center;
`
const Section = styled(Flex)`
  min-height: 32rem;
  background-color: #333;
  margin-right: auto;
  margin-left: auto;
`

function Mseries200 (){
    return(
      <div>

            <Hero is='header' width={1}>
              <Container width={1} >
                  <HeroImage>
                    <Headline p={32}>
                      <h5>Zortrax M200</h5>
                      <h1>Highest Rated</h1>
                      <h5>3D Printer in it's class</h5>
                    </Headline>
                  </HeroImage>
            </Container>
            </Hero>


            <Section is='header' width={1}>
              <Container width={1} >
                    <Flex>
                      <Box px={32} py={64} width={[1, 2/3]}>
                        <h1>Ready to Rock, out of the Box</h1>
                        <h3>Zortrax 3D printers, software, and materials work together in an integrated system.</h3>
                        <h5>Why? The answer is simple - the quality of your prints. A perfectly matched 3D printer, software and materials guarantee high-quality 3D prints every time.</h5>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box px={16} width={[1, 1/2]} style={{textAlign: 'right',}}>
                        <h2>Percision</h2>
                        <p>The Zortrax M200 carefully reproduces the dimensions of every 3D model – which means that you can print detailed elements with the certainty that each copy will be identical.</p>

                        <h2>Reliability</h2>
                        <p>With Zortrax M200, you can print extensive jobs with almost no maintenance. The Zortrax Ecosystem provides users with high dimensional accuracy, repeatability, and operating ease.</p>
                      </Box>
                      <Box px={16} width={[1, 1/2]}>
                        <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/m300-side-by-side.png" alt="responsive"/>
                      </Box>
                    </Flex>
            </Container>
          </Section>

          <Section is='header' width={1}>
            <Container width={1} >
                  <Flex>
                    <Box px={32} py={64} width={[1, 2/3]}>
                      <h1>Start at the Top</h1>
                      <p>While creating the M200, Zortrax focused on features that they deemed the most important - reliability, concistency, and precision. Soon these three aspects became hallmarks of M200. The Zortrax M200 carefully reproduces the dimensions of every 3D model – which means that you can print detailed elements with the certainty that each copy will be identical.</p>
                    </Box>
                  </Flex>
                  <Flex>
                    <Box px={16} width={[1, 1/2, 1/4]}>
                      <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/dimensions-white.svg" alt="responsive"/>
                      <h5>WORKSPACE DIMENSIONS</h5>
                      <p>200 x 200 x 180 mm</p>
                    </Box>
                    <Box px={16} width={[1, 1/2, 1/4]}>
                      <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/dimensions-white.svg" alt="responsive"/>
                      <h5>WORKSPACE DIMENSIONS</h5>
                      <p>200 x 200 x 180 mm</p>
                    </Box>
                    <Box px={16} width={[1, 1/2, 1/4]}>
                      <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/dimensions-white.svg" alt="responsive"/>
                      <h5>WORKSPACE DIMENSIONS</h5>
                      <p>200 x 200 x 180 mm</p>
                    </Box>
                    <Box px={16} width={[1, 1/2, 1/4]}>
                      <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/dimensions-white.svg" alt="responsive"/>
                      <h5>WORKSPACE DIMENSIONS</h5>
                      <p>200 x 200 x 180 mm</p>
                    </Box>
                  </Flex>
          </Container>
        </Section>

      </div>

    )
}

export default Mseries200
