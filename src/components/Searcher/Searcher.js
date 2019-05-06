import React, { Component } from 'react';

class Searcher extends Component {
    
    busquedaR = React.createRef();

    getData =(e) =>{
        e.preventDefault();
        const t= this.busquedaR.current.value
        this.props.me(t)
    }

    render(){
        return(
            <form onSubmit={this.getData}>
        <div className="col-md-8">
            <input ref={this.busquedaR} type="text" />
            <input type="submit" value="search"/> 
        </div>
        </form>
        )
    }
}

export default Searcher 