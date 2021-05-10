import React from 'react';

import './color.css';
import s from './App.module.scss';

const App = () => {
    return (
        <div className={s.header + ' color'}>
            This is App component!
        </div>
    )
}

export default App;