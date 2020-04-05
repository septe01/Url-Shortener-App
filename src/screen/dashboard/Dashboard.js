import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Dashboard = ({params}) => {
  const [url, setUrl] = useState('');
  const [finalUrl, setfinalUrl] = useState('');

  const shorten = async () => {
    console.log(url);
    // fetch(`https://cutt.ly/api/api.php?key=[API-KEY]&short=${url}`)
    // fetch(`https://cutt.ly/api/api.php?key=[API_KEY]&short=[${url}]`)
    fetch(
      `https://cutt.ly/api/api.php?key=[66d810fb31325bb825290033e6fb31e9e6b30]&short=[https://github.com/septe01/Url-Shortener-App]`,
    )
      .then(async response => {
        const data = await response.json();
        setfinalUrl(data.url.shortLink);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        my
        <Text style={{color: '#ff7c7c'}}>URL</Text>
      </Text>
      <TextInput
        style={styles.urlInput}
        onChangeText={text => setUrl(text)}
        value={url}
        placeholder="Enter Your Url"
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.ShortenBtn}
        onPress={() => shorten()}>
        <Text style={{color: '#fff'}}>Shorten</Text>
      </TouchableOpacity>
      <Text style={styles.finalUrl}>{finalUrl}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#21243d',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 50,
  },
  urlInput: {
    height: 50,
    width: '80%',
    borderColor: '#21243d',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 20,
    fontSize: 20,
  },
  ShortenBtn: {
    backgroundColor: '#ff7c7c',
    borderRadius: 20,
    height: 40,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  finalUrl: {
    height: 40,
    width: '80%',
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});
export default Dashboard;
