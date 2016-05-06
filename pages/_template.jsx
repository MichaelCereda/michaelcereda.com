import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from 'utils/typography'
import icons from 'simple-line-icons/css/simple-line-icons.css';
import {Menu} from '../components/Menu.jsx'
import {Header} from '../components/Header.jsx'

import '../less/site.less';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Menu />
        {this.props.children}

      </div>
    )
  },
})

/*
<Container
  style={{
    maxWidth: 960,
    padding: `${rhythm(1)} ${rhythm(1/2)}`,
    paddingTop: 0,
  }}
>

</Container>
 */
