import React, { Component } from 'react'
// import {BrowserRouter as Router, Link} from 'react-router-dom'
import logo from 'images/logo.svg'
import 'App.css'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Header from 'header'
import Hero from 'front-hero'
import SectionTwo from 'front-section-2'
import SectionThree from 'front-section-3'
import MaterialsSection from 'materials-section'
import Footer from 'footer'


const MasterContainer = styled.div`
width: 100vw;
`
const NavContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
`

const LeftNav = styled.nav`
  padding: 24px;
  border-right: 1px #DFE3E7 solid;
  height: 100vh;
  min-width: 120px;

`
const LeftMenuItem = styled.li`
  list-style-type: none;
  margin: 1.5rem 0;
`


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  justify-content: center;
`

const CardContainer = styled.div`
  display: flex;
  max-width: 75rem;
  flex-basis: 200px;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
`

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0;
  width: 100%;
  align-self: center;
  box-shadow: 0 9px 11px 0 rgba(51,105,139,0.1);
`

const SidePanelContainer = styled.div`
display: flex;
position: absolute;
right: 0;
width: 300px;
flex-basis: 300px;
flex-grow: 2;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start;
`

const SidePanel = styled.div`
  background-color: #fff;
  height: 100vh;
  padding: 24px;
  width: 100%;
  align-self: center;
  box-shadow: -8px 0 6px 0 rgba(51,105,139,0.03);
`
const SidePanelSpacer = styled.div`
width: 300px;
`

function Front (){
    return(
      <MasterContainer>
          <Hero>
            
                <Flex>
                  <Box width={1/2} px={2}>
                    Half width
                  </Box>
                  <Box width={1/2} px={2}>
                    <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/m200-pedestal.png" alt="responsive" />
                  </Box>
                </Flex>

          </Hero>
          <SectionTwo>
            <Container>
              <CardContainer>
                <section class="front-m300">
                  <div class="row">
                  <div class="font-m300__content">
                  <h5 class="is-text-blue">Zortrax M300</h5>
                  <h1>Large and in Charge</h1>
                  <h4>Everythinng you love about the M200 supersized.</h4>
                  <div class="hero-button">
                    <a href="3d-printers/m300/" class="button primary large">Learn More</a>
                  </div>
                  </div>
                  <div class="font-m300__product">
                  <div class="front-m300__product-image">
                    <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/m300-side-by-side.png" alt="responsive"/>
                  </div>
                  </div>
                  </div>
                  </section>
              </CardContainer>
            </Container>
          </SectionTwo>
          <SectionThree>
            <Container>
              <CardContainer>
                <section class="front-inventure">
                <div class="row">
                <div class="front-inventure__image">
                  <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/inventure-printers.png" alt="responsive" />
                </div>
                <div class="front-inventure__content">
                  <h5 class="is-text-blue">Zortrax Inventure</h5>
                  <h1>Beautiful. Professional.</h1>
                  <h4>Dual Print heads and an enclosed, heated print area open the world to incredible possibilities.</h4>
                  <div class="hero-button">
                    <a href="3d-printers/inventure/" class="button primary large">Learn More</a>
                  </div>

                </div>
                </div>
                <div class="row">
                <div class="front-inventure__example">
                  <div class="front-inventure__example-before">

                  </div>
                  <div class="front-inventure__example-after">

                  </div>
                </div>
                </div>
                </section>
              </CardContainer>
            </Container>
          </SectionThree>
          <MaterialsSection>
            <section class="front-materials">
                <div class="front-materials__m-series">
                  <div class="row">
                    <div class="front-materials__m-series__image">
                      <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/zglass.png" alt="responsive" />
                    </div>
                    <div class="front-materials__m-series__content">
                      <h6>Zortrax M-Series Materials</h6>
                      <h2>Choice is Good.</h2>
                      <p>Choose from six material types and more than twenty three colors for incredible results an unmatched repeatability.</p>
                      <div>
                        <a href="materials/">Learn more about M-Series Materials →</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="front-materials__inventure-series">
                  <div class="row">
                    <div class="front-materials__m-series__image">
                      <img src="https://3dproshare.com/wp-content/themes/foundationpress_2017-05-09_00-37/assets/images/3dproshare/inventure-material.png" alt="responsive" />
                    </div>
                    <div class="front-materials__m-series__content">
                      <h6>Zortrax Inventureure Materials</h6>
                      <h2>Amazing Times Two.</h2>
                      <p>Dual print heads, six colors, and a support material make for endless possibilities. Zortrax Inventure is coming soon.</p>
                      <div>
                        <p>Coming Soon.</p>

                      </div>
                    </div>
                  </div>
                </div>
            </section>
          </MaterialsSection>
          <Footer>
                <article id="nav_menu-6" class="large-4 columns widget widget_nav_menu">
                  <h6>Terms</h6>
                <div class="menu-footer2-container">
                  <ul id="menu-footer2" class="menu">
                    <li id="menu-item-2289" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2289">
                      <a href="https://3dproshare.com/privacy/">Privacy Policy
                    </a>
                  </li>
                  <li id="menu-item-2290" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2290">
                    <a href="https://3dproshare.com/return-policy-2/">Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <article id="text-18" class="large-4 columns widget widget_text">
            <h6>Contact</h6>
            <div class="textwidget">
              <a href="mailto:855-967-8729">Call us at 855-ZORTRAX (855-967-8729)</a><br />
              <a href="mailto:sales@3dproshare.com" target="_top">Contact Email Support</a>
            </div>

          </article>
          <article id="text-17" class="large-4 columns widget widget_text">
            <div class="textwidget">
              <img src="https://3dproshare.com/wp-content/uploads/2017/05/zortrax-od-logo@2x.png" alt="Zortrax Official Distributor" />
                  <span class="rights">3D Proshare © 2017. All rights&nbsp;reserved</span>
                  </div>
          </article>

        </Footer>
      </MasterContainer>

    )
}

export default Front
