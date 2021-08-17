import React from 'react';
import {View} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/core';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow.js';
import {GOOGLE_API_KEY} from '../../secret.js';
const DestinationSearch = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', {viewport: details.geometry.viewport});
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
