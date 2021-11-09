import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, text, style = {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 50,
        marginTop: 30,
        backgroundColor: '#007bff',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Text style={{fontSize: 18, color: 'white'}}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
