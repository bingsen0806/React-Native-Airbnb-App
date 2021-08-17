/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import {useRoute} from '@react-navigation/core';
import {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const PostScreen = () => {
  const route = useRoute();

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(graphqlOperation(listPosts));
        setPosts(postsResult.data.listPosts.items);
        const newPost = postsResult.data.listPosts.items.find(
          place => place.id === route.params.postId,
        );
        if (newPost) {
          setPost(newPost);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [route.params.postId]);

  return (
    <View style={{backgroundColor: 'white'}}>
      {post && <DetailedPost post={post} />}
    </View>
  );
};

export default PostScreen;
