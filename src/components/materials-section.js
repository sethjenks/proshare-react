import React, { Component } from 'react'
import styled from 'styled-components'



const MaterialsSection = styled.div`
  max-width: none;
  background-color: #1f2327;
  min-height: 16rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 4rem 0;
  overflow: hidden;
`
class materialsSection extends Component {
  render() {
    return (

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
    )
  }
}

export default MaterialsSection
