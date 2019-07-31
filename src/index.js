import { compiler } from 'markdown-to-jsx';
import React from 'react';
import { render } from 'react-dom';

const hello = render(compiler('# Hello world!'), document.body);
