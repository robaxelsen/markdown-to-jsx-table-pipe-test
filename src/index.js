import SimpleMarkdown from 'simple-markdown';
import React from 'react';
import { render } from 'react-dom';
import table from './markdown/table.md'

var mdParse = SimpleMarkdown.defaultBlockParse;
var mdOutput = SimpleMarkdown.defaultOutput;

var syntaxTree = mdParse(table);

console.log(JSON.stringify(syntaxTree, null, 4));
