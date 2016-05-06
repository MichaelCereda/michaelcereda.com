import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import {MainSlider} from '../components/MainSlider.jsx';
import _ from 'lodash';
import access from 'safe-access';

import {ProjectList} from '../components/sections';

// Styles for highlighted code blocks.
import 'css/zenburn.css'
import 'css/slider.css'

export default class Index extends React.Component {
  constructor(props){
    super(props);

    this.sortedPages = _.sortBy(props.route.pages,
      (page) => access(page, 'data.date')
        ).reverse()

    this.pageGroups = _.groupBy(props.route.pages, 'file.dirname');
    this.pageGroups.root = _.groupBy(this.pageGroups[""], "file.name");
    delete this.pageGroups[""];
  }
  render () {

        //sortedPages.forEach((page) => {
    return (
      <div>
        <MainSlider />
        <ProjectList projects={this.pageGroups.projects} />
        <h1>
          Hi people
        </h1>
        <p>Welcome to your new Gatsby site</p>
        <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>
        <h3>Supported file types</h3>
        <ul>
          <li>
            <Link to={prefixLink('/markdown/')}>Markdown</Link>
          </li>
          <li>
            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/coffee-react/')}>CJSX (Coffeescript React components)</Link>
          </li>
          <li>
            <Link to={prefixLink('/html/')}>HTML</Link>
          </li>
          <li>
            <Link to={prefixLink('/json/')}>JSON</Link>
          </li>
          <li>
            <Link to={prefixLink('/yaml/')}>YAML</Link>
          </li>
          <li>
            <Link to={prefixLink('/toml/')}>TOML</Link>
          </li>
        </ul>
        <h3>Supported CSS processors</h3>
        <ul>
          <li>
            <Link to={prefixLink('/postcss/')}>PostCSS</Link>
          </li>
          <li>
            <Link to={prefixLink('/sass/')}>Sass</Link>
          </li>
          <li>
            <Link to={prefixLink('/less/')}>Less</Link>
          </li>
        </ul>
      </div>
    )
  }
}
