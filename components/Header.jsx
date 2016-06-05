import React from 'react';
import { Link } from 'react-router'
var _ = require('lodash');
import {Menu} from './Menu.jsx'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { Container } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'
import {Configuration} from '../utils/configuration.js'

export class Header extends React.Component{
  render(){
    return <Headroom
      wrapperStyle={{
        marginBottom: rhythm(1),
      }}
      style={{
        //background: 'lightgray',
        //padding:7
      }}
    >
      <div style={{
          background:'lightgray',
        }}>
      <Container
        style={{

          maxWidth: Configuration.maxWidth,
          paddingTop: 0,
          padding: `${rhythm(1)} ${rhythm(1/2)}`,
        }}
      >
        <Link
          to={prefixLink('/')}
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Michael Cereda
        </Link>
        <Menu />
      </Container>

        </div>
    </Headroom>
  }
}
