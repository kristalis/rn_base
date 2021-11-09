import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AuthService from '../../service/AuthService';
import TrackService from '../../service/TrackService';

const Home = ({navigation}) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    AuthService.login({
      email: 'anas@gmail.com',
      password: '123123',
    }).then(r => {
      TrackService.getAllTracks().then(setTracks);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          height: '100%',
        }}>
        {tracks.map((track, i) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Track', track);
              }}
              key={i}
              style={{
                height: 80,
                margin: 10,
                padding: 10,
                borderRadius: 12,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: '900', color: 'grey'}}>
                {track.location}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
