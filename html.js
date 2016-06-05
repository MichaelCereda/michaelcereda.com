import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'


module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />

          <title>{title}</title>
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png"/>
            <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
            <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192"/>
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            {/*<meta name="theme-color" content="#2e3759"/>*/}
          <TypographyStyle />
          {cssLink}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src="//cdn.jsdelivr.net/velocity/1.2.3/velocity.min.js"></script>
          <script src="//cdn.jsdelivr.net/velocity/1.2.3/velocity.ui.min.js"></script>
          <script src={prefixLink('/bundle.js')} />
        </body>
      </html>
    )
  },
})
