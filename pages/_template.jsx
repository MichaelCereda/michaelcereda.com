import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import { rhythm } from 'utils/typography'
import icons from 'simple-line-icons/css/simple-line-icons.css';
//import fontello from '../css/fontello.css';

import {Header} from '../components/Header.jsx'

import '../less/site.less';
// import '../css/stripes.css';




module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  componentDidMount(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-7952099-2', 'auto');
    ga('require', 'linkid');
    ga('send', 'pageview');
  },
  render () {
    return (
      <div className="site-container">

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
