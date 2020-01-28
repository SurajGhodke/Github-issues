import React,{Component} from "react";
import axios from 'axios';
import ResultComponent from "./ResultComponent";

class InputComponent extends Component{
    constructor() {
        super()

        this.state = {
            owner : "",
            repo : "",
        }
    }

    ownerName = (event) => {
        this.setState({
            owner:event.target.value
        })
    }

    repoName = (event) => {
        this.setState({
            repo:event.target.value
        })
    }

    render(){
        //let submit = this.props;
        let {items} = this.state;
        return(
            <div>
                <p style={{color:"#04d6cb"}}>List GitHub Issues from Any Repository</p>
                <input type='text' onChange={this.ownerName} value={this.state.owner} placeholder='Enter Github Username' className='inputFields'/>
                <br/>
                <input type='text' onChange={this.repoName} value={this.state.repo} placeholder='Enter Repository Name' className='inputFields'/>
                <br/>
                <br/>
                <ResultComponent {...this.state} />

            </div>
        );
    }
}

export default InputComponent;