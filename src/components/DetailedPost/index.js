import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles.js';

const days = 7;

const DetailedPost = ({post}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: post?.image || '',
          }}
        />
        <Text style={styles.bedrooms}>
          {post?.bed || 0} bed {post?.bedroom || 0} bedroom
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {post?.type || ''}. {post?.title || ''}
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post?.oldPrice || ''} </Text>
          <Text style={styles.price}> ${post?.newPrice || ''}</Text>/ night
        </Text>

        <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>

        <Text style={styles.longDescription}>{post?.description || ''}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
