const markdown = require('../libraries/markdown')

/**
 * Add container HTML to warning content
 *
 * @param {String} string Markdown
 * @return {String} HTML
 *
 */
module.exports = string => {
  return `<div class="govuk-warning-text">
    <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
    <strong class="govuk-warning-text__text">
      <span class="govuk-warning-text__assistive">Warning</span>
      ${markdown.renderInline(string)}
    </strong>
  </div>`
}
