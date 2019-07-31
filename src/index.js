import { compiler } from 'markdown-to-jsx';
import React from 'react';
import { render } from 'react-dom';
import table from './markdown/table.md'

render(compiler(table), document.body);
