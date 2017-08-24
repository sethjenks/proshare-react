import React from 'react'
import styled from 'styled-components'


const Button = styled.a`
	/* Adapt the colours based on primary prop */
	background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};

	font-size: 1em;
	margin: 4em 0;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 4px;
`


export default Button
