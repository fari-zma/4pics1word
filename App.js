import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      text: ''
    };
  }

  clear = () => { 
    this.setState({text: ''});
  };

  check = () => {
    if(this.state.text === '')
      return;
    else if(this.state.text.toLowerCase() === 'detective') {
      Alert.alert('Correct answer', this.state.text, [{onDismiss: () => {this.clear()} }] );
    }
    else {
      Alert.alert('OOPS! Wrong Answer', 'Try Again', [{onDismiss: () => {this.clear()} }] );
    }
    this.clear();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topBorder}>4 pics 1 word</Text>

        <View style={{flex: 4/6, justifyContent: "center"}}>
          <View style={styles.grid}>
            <Image source={require('./assets/detective1.jpg')} style={styles.img} />
            <Image source={require('./assets/detective2.jpg')} style={styles.img} />
          </View>
          <View style={styles.grid}>
            <Image source={require('./assets/detective3.jpg')} style={styles.img} />
            <Image source={require('./assets/detective4.jpg')} style={styles.img} />
          </View>
        </View>

        <TextInput style={styles.text}
          onChangeText={(text) => this.setState({text})}
          value= {this.state.text}
          placeholder='Enter word...'
          placeholderTextColor='#fff'/>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonBorder} onPress={ () => {this.check()} }>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBorder} onPress={ () => {this.clear()} }>
            <Text style={styles.button}>Clear</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBorder: {
    color: '#0ABDE3',
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 30
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    alignItems :"center"
  },
  img: {
    width: 150, height: 150,
    marginHorizontal: 8,
    borderColor: '#586776',
    borderWidth: 2,
    borderRadius: 5
  },
  text: {
    fontSize :18,
    marginVertical: 30,
    backgroundColor: '#EA7773',
    alignSelf: "stretch",
    color: '#fff',
    textAlign: "center",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonBorder: {
    marginHorizontal: 8,
    backgroundColor: '#0ABDE3',
    height: 50, width: 150,
    borderRadius: 5,
    justifyContent:"center"
  },
  button: {
    color: '#fff',
    textAlign: "center"
  }
});
