import React from 'react';

function SearchBox({searchfield,searchchange}){
    return (
        <div className = 'pa2'>
            <input className = 'bg-lightest-blue pa2 ba b--green'
                type = 'text' 
                placeholder = 'search robots'
                onChange = {searchchange}>
            </input>
        </div>
    );
}
export default SearchBox;