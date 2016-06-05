import frontMatter from 'front-matter'
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'
import objectAssign from 'object-assign'
import markdownItTocAndAnchor from "./markdown-it-toc-and-anchor";


const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
})

  .use(require('markdown-it-sub'))
  .use(require('markdown-it-footnote'))
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-abbr'))
  .use(require('markdown-it-attrs'))
  .use(markdownItTocAndAnchor, {
    anchorLink:false
    });

// function renderFromMd(metaBody, opts){
//
//     return new Promise((resolve, reject)=>{
//       const body = md.render(metaBody,{
//           tocCallback: function(tocMarkdown, tocArray, tocHtml) {
//             resolve(tocArray)
//           },
//           ... opts
//         })
//     })
// }

module.exports = function (content) {
  this.cacheable();
  const meta = frontMatter(content)
  for (var key in meta.attributes){

    if(meta.attributes[key].indexOf('\n')!=-1){
      meta.attributes[key] = meta.attributes[key].replace('\n', '<br />');
    }
  }

  var body = md.render(meta.body,{anchorPrefix: meta.attributes.title});

  const result = objectAssign({}, meta.attributes, {
    body
  })
  this.value = result
  return `module.exports = ${JSON.stringify(result)}`
}
