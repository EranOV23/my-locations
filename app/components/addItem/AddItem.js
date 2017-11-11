import React from 'react';
import {connect} from 'react-redux';
import {addItem, editItem} from '../../actions/creators';
import {Redirect, withRouter} from 'react-router';

import './addItem.scss';


class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: this.props.match.params.type,
            redirect: false,
            validateMessage: false,
            item: {
                name: "",
                address: "",
                category: "",
                coordinates: {
                    lat: "",
                    lng: "",
                }
            },
        };
    }

    componentWillMount(){
        if(this.props.match.params.type && this.props.match.params.item){
            this.getItemToEdit(this.props.match.params.type, this.props.match.params.item);
        }
    }

    getItemToEdit(type, itemName){
        let item = this.props[type].find((item)=> item.name === itemName);
        this.setState({item});
    }

    onChange(e){
        if(e.target.name === "lat" || e.target.name === "lng"){
            let key = e.target.name;
            let value = e.target.value;
            let item = Object.assign({}, this.state.item);
            item.coordinates[key] = value;
            this.setState({item});
        }
        else{
            let key = e.target.name;
            let value = e.target.value;
            let item = Object.assign({}, this.state.item);
            item[key] = value;
            this.setState({item});
        }
    }

    validate(data){
        let {name, address, category, coordinates} = data.item;
        console.log({name, address, category, coordinates});

        switch(data.type){
            case "categories":
                if(!name){
                    return this.setState({validateMessage: true});
                }
                else{
                    this.setState({validateMessage: false});
                    return this.save(data);

                }
            case "locations":
                if(!name || !address || !coordinates.lat || !coordinates.lng || !category || category === "Please select category..."){
                    return this.setState({validateMessage: true});
                }
                else{
                    this.setState({validateMessage: false});
                    return this.save(data);
                }
        }
    }

    save(data){
        if(this.props.match.params.item){
            let itemName = this.props.match.params.item;
            this.props.editItem(data, itemName);
        }
        else
            this.props.addItem(data);

        this.setState({redirect: true});
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={`/${this.state.type}`}/>
        }
        else{
            return (
                <div className="form">
                    <h1>{this.props.match.params.item ? "Edit" : "Add" } item for {this.props.match.params.type}</h1>
                    <div>
                        <div className="col-sm-6">
                            <div className="form-group required">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       name="name"
                                       placeholder="name"
                                       value={this.state.item.name}
                                       onChange={(e)=>this.onChange(e)}
                                       required autoFocus/>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.type === "locations" ?
                            <div>
                                <div className="col-sm-6">
                                    <div className="form-group required">
                                        <label htmlFor="address">Address</label>
                                        <input type="text"
                                               className="form-control"
                                               id="address"
                                               name="address"
                                               placeholder="address"
                                               value={this.state.item.address}
                                               onChange={(e)=>this.onChange(e)}
                                               required autoFocus/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group required">
                                        <label htmlFor="category">Category</label>
                                        <select name="category"
                                                value={this.state.item.category}
                                                onChange={(e)=>this.onChange(e)}
                                                id="category">
                                                <option selected={null} value={null}>Please select category...</option>
                                                {this.props.categories.map((cat, i) => <option key={i} value={cat.name}>{cat.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group required">
                                        <label htmlFor="coordinates">Coordinates</label>
                                        <input type="number"
                                               className="form-control"
                                               id="lat"
                                               name="lat"
                                               placeholder="lat"
                                               value={this.state.item.lat}
                                               onChange={(e)=>this.onChange(e)}
                                               required autoFocus/>
                                        <input type="number"
                                               className="form-control"
                                               id="lng"
                                               name="lng"
                                               placeholder="lng"
                                               value={this.state.item.lng}
                                               onChange={(e)=>this.onChange(e)}
                                               required autoFocus/>
                                    </div>
                                </div>
                            </div>
                            : ""
                    }
                    <div className="col-sm-12">
                        <button type="submit"
                                className="btn"
                                onClick={()=>this.validate(this.state)}>{this.props.match.params.item ? "Edit": "Add"} Item
                        </button>
                    </div>

                    <div className="col-sm-12 validateMessage">
                        <h4>{this.state.validateMessage ? "All fields must be fulfilled" : ""}</h4>
                    </div>
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        categories: state.data.categories,
        locations: state.data.locations,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (data) => dispatch(addItem(data)),
        editItem: (data, itemName) => dispatch(editItem(data, itemName)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddItem))
