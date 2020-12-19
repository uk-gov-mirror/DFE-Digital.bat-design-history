const markdown = require('../libraries/markdown')

/**
 * Add container HTML to inset text content
 *
 * @param {String} string Markdown
 * @return {String} HTML
 *
 */
module.exports = string => {
  return `<div class="govuk-inset-text">
    ${markdown.render(string)}
  </div>`
}
