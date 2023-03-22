import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {profileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getData('userProfile').then(res => setUserProfile(res));
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image
              source={{uri: userProfile.profile_photo_url}}
              style={styles.photoContainer}
            />
          </View>
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 26,
  },
  photo: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    padding: 25,
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
