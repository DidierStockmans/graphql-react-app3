import React from 'react';
import Header from './Header'; 

const App = (props) => {console.log(1);
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};

export default App;