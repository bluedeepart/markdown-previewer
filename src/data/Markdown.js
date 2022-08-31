const MarkdownData = `
# Heading level 1
---
## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

To create paragraphs, use a blank line to separate one or more lines of text.

Hi I'm **bold text**
Hi I'm __bold text__

Hi I'm *italic text*
Hi I'm _italic text_

Hi I'm ***bold and italic text***
Hi I'm ___bold and italic text___

> My Portfolio is [Deepart](https://depart.in).

> To create a blockquote, add a > in front of a paragraph. 

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
var add2 = function(number) {
  return number + 2;
}
\`\`\`

1. Ordered List Item 1
1. Ordered List Item 2
    1. Ordered List Item 2.1
    1. Ordered List Item 2.2
1. Ordered List Item 3

- Unordered List Item 1

* Unordered List Item 2
    - Unordered List Item 2.1
    - Unordered List Item 2.2

+ Unordered List Item 3

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default MarkdownData;