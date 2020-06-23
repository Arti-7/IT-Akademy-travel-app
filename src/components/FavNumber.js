import React from 'react';
// import { ReactComponent } from '*.svg';
import {connect} from "react-redux";


class FavNumber extends React.Component {


    render(){
        return <span>{this.props.favourites.length}</span>
    }
}
const mapStateToProps = (state) => ({
    favourites: state.favourites
    })
export default connect(mapStateToProps)(FavNumber)