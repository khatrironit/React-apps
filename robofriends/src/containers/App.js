import React,{Component} from 'react';
import Cardlist from'../components/Cardlist';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots';
import './App.css';
import Scroll from '../components/Scroll';
// const state = {
//         robots : robots,
//         searchfield: ""
// }
class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(user=>this.setState({robots:user}));
    }

    onsearchchange = (event)=>{
        this.setState({searchfield:event.target.value});
       
        //console.log(filteredrobots);
    }
    render(){
        const filteredrobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield);
        })
        if(this.state.robots.length == 0){
            return (
                <h1>Loading</h1>
            );
        }else{
            return(
                <div className = 'tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchchange = {this.onsearchchange} />
                    <Scroll>
                        <Cardlist robots = {filteredrobots} /> 
                    </Scroll>
                </div>
            );
        }
        
    }
}
export default App;