import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { AppBar as MaterialAppBar, HStack, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';

const AppBar = () => {
//   const navigation = useNavigation();

  return (
    <MaterialAppBar 
        style={styles.appBar} 
        color="white"
        title="Fido"
        trailing={(
            <HStack>
                <IconButton
                    icon={props => <Icon name="camera" {...props} />}
                    //   onPress={() => navigation.navigate('Camera')}
                />
                <IconButton
                    icon={props => <Icon name="location" {...props} />}
                    //   onPress={() => navigation.navigate('Map')}
                />
            </HStack>
        )}
    />
  );
};

const styles = StyleSheet.create({
  appBar: {
    paddingTop: 40,
  },
});

export default AppBar;
