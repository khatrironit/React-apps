import React from 'react';
import Cardlist from'./Cardlist';
import SearchBox from './SearchBox';
function App(){
    return(
        <div className = 'tc'>
            <h1>RoboFriends</h1>
            <SearchBox />
            <Cardlist />
        </div>
    );
}
export default App;