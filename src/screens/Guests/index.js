/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import {useNavigation, useRoute} from '@react-navigation/core';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.max(0, children - 1))}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

            <Pressable
              style={styles.button}
              onPress={() => setChildren(children + 1)}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => setInfant(Math.max(0, infant - 1))}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infant}</Text>

            <Pressable
              style={styles.button}
              onPress={() => setInfant(infant + 1)}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          style={{
            marginBottom: 20,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
                params: {
                  guests: adults + children,
                  viewport: route.params.viewport,
                },
              },
            })
          }>
          <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
