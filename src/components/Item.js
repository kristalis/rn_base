import React from 'react';
import {Text, View} from 'react-native';

const Item = ({heading, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <Text style={{fontSize: 16, marginRight: 10, fontWeight: 'bold'}}>
        {heading}
      </Text>
      <Text>{text}</Text>
    </View>
  );
};

export default Item;
