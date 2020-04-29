import React from 'react';
import ColorPicker from '../lib';

const App = () => (
    <div>
        <ColorPicker onSelectColor={(color) => console.log(color)}/>
    </div>
);

export default App;
