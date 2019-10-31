import React, { Component } from 'react';

let Price = (props) =>(
    <li className="list-group-item">
            Bitcoi rate for {props.bpi.description}:
            <span class="badge badge-primary">{props.bpi.code}</span>
            <strong>{props.bpi.rate}</strong>
    </li>
)
class prices extends Component {
    state = {
        bob: 'ok'
    }
    componentDidMount(){
        this.setState({bob: 'k'});
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {Object.keys(this.props.bpi).map((key, index)=>{
                        let bpi = {
                            country: key, 
                            description: this.props.bpi[key].description,
                            code: this.props.bpi[key].code,
                            rate: this.props.bpi[key].rate,
                        }
                        return <Price key={index} bpi={{...bpi}}/>; 
                    })
                    }
                    <Price bpi={this.props.bpi.USD}/>
                </ul>
            </div>
        );
    }
}

export default prices;