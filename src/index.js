import { compiler } from 'markdown-to-jsx';
import SimpleMarkdown from 'simple-markdown';
import React from 'react';
import { render } from 'react-dom';
import table from './markdown/table.md'

const mdParse = SimpleMarkdown.defaultBlockParse;
const mdOutput = SimpleMarkdown.defaultOutput;
const syntaxTree = mdParse(table);

console.log(JSON.stringify(syntaxTree, null, 4));

render(compiler(table), document.body);

