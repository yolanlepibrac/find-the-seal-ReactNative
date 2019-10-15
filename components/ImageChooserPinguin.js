
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, TouchableOpacity, Dimensions, TextInput, Alert, Image, Animated, Easing} from 'react-native';
import { connect } from "react-redux";
import Constantes from "../utils/Constantes";

import { changeAccountState } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    changeAccountState: (userData) => dispatch(changeAccountState(userData)),
  };
};




class ImageChooserComponentPinguin extends Component {

  constructor(props) {

    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      source : Constantes.imagesIce[Math.round(Math.random()*Constantes.imagesIce.length-1)],
    };
  }

  componentDidMount = () => {
    //console.log(this.props.position)
    if(this.props.isDisplayed){
      Animated.timing(this.state.opacity,{toValue: 1,duration: 200,}).start();
    }else{
      Animated.timing(this.state.opacity,{toValue: 0,duration: 1000,}).start();
    }

  }

  componentWillUnmount = () => {


  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
    if (this.props.position !== prevProps.position) {
    //  console.log(this.props.position)
    }
  }



  render(){
      return(
        <View  style={{flexDirection:"row", justifyContent:"center",  flex:1, position:"absolute",
        top:this.props.top,
        left:this.props.left }}>
          <Animated.Image style={{ height:Constantes.screenWidth/Constantes.numberPinguin, width:Constantes.screenWidth/Constantes.numberPinguin,  opacity: 1 }} source={require("../assets/images/pinguin/pinguinLeft.png")}/>
        </View >
      )

  }
}

const mapStateToProps = (state) => {
  return {
    accountState:state.account.accountStateRedux,
  }
}

const ImageChooserPinguin = connect(mapStateToProps, mapDispatchToProps)(ImageChooserComponentPinguin);
export default ImageChooserPinguin;
