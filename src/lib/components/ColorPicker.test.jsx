import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './ColorPicker';

it('ColorPicker renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ColorPicker />, div);
});
