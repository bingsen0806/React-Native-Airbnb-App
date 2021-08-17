import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/searchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import {useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const {guests, viewport} = route.params;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          }),
        );
        setPosts(postsResult.data.listPosts.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [
    guests,
    viewport.northeast.lat,
    viewport.northeast.lng,
    viewport.southwest.lat,
    viewport.southwest.lng,
  ]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'}>
        {() => <SearchResults posts={posts} />}
      </Tab.Screen>
      <Tab.Screen name={'map'}>
        {() => <SearchResultsMap posts={posts} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
