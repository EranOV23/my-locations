import React from 'react';
import './map.scss'

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: parseFloat(this.props.match.params.lat),
            lng: parseFloat(this.props.match.params.lng)
        };
    }

    componentDidMount(){
        this.initMap();
    }

    initMap(){
        if(!this.state.lng || !this.state.lat){
            var uluru = {lat: 32, lng: 34.8};
            var zoom = 10;
        }
        else{
            var uluru = {lat: this.state.lat , lng: this.state.lng};
            var zoom = 15;
        }
        let map = new google.maps.Map(this.map, {
            zoom: zoom,
            center: uluru,
        });
        let marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }


    render(){
        return (
            <div>
                <div ref={ (map) => {this.map=map} } id="map"></div>
            </div>
        );
    }
}