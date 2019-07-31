import { compiler } from 'markdown-to-jsx';
import React from 'react';
import { render } from 'react-dom';

render(compiler('# Hello world!'), document.body);

/*
    renders:

    <h1>Hello world!</h1>
 */
