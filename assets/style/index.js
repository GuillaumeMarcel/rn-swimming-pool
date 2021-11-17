import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7f7f7f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flexDirection: "row"
    },
    h1: {
      fontSize: 20,
      fontWeight: "bold"
    },
    navbar: {
      position: "absolute",
      bottom: 0,
      padding: 10,
      backgroundColor: '#fff',
      width: "100%",
      flexDirection: "row"
    },
    header: {
      flex: 1,
      backgroundColor: '#000',
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
    h1white: {
      color: '#fff'
    },
    body: {
      flex: 15,
      backgroundColor: '#fff',
      width: "100%",
      alignItems: 'center',
      padding: 10
    },
    footer: {
      flex: 1,
      marginBottom: 37,
      backgroundColor: '#fff',
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 200,
      height: 200,
    },
    view1: {
      width: 100,
      height: 50,
      marginBottom:10,
      marginRight:10,
      backgroundColor: "#ff00ff"
    },
    view2: {
      width: 50,
      height: 50,
      marginBottom:10,
      marginRight:10,
      backgroundColor: "#ff0006"
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:"#fff"
    },
    burgercontainer: {
      position: "absolute",
      width:50,
      height:50,
      top: 0,
      right: 0,
      marginTop: 10
    },
    menu: {
      padding:50,
      zIndex: 1,
      position: "absolute",
      backgroundColor: '#fff',
      width: '100%',
      height: '100%'
    },
    button: {
      margin: 10,
      width: 200,
      padding:10,
      backgroundColor: '#bababa',
      alignItems: 'center'
    }
  });

export default styles