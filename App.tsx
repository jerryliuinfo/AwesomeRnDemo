/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextUsage } from "./app/text/TextDemo";
import { FlexBasic, FlexJustifyContent, FlexPercentageBasic } from "./app/flex/FlexDemo";
import { Cafe } from "./app/props/PropsDemo";
import { InputTextComponent, InputTextPropsComponent } from "./app/textinput/InputTextDemo";
import { FlatListComponent } from "./app/flatlist/FlatListComponent";
import { ClockComponent2, Welcome } from "./app/jsx/jsxdemo";
import { EventHandle } from "./app/jsx/EventHandle";
import { ConditionRenderComponent, Toggle } from "./app/jsx/EventDeal";
import { ListComponent, ListComponent2 } from "./app/flatlist/FlatListDemo";
import { ActivityIndicatorDemo } from "./app/indicator/ActivityIndicatorDemo";
import { ButtonDemo } from "./app/button/ButtonDemo";
import { ImageBgComponent } from "./app/imagebg/ImageBgComponent";
import { KeybordAvoidingViewComponent } from "./app/keybord/KeyboardAvoidingViewComponent";
import { ModalComponent } from "./app/modal/ModalComponent";



const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      <FullName></FullName>
    </View>
  );
};


const getFullName = (firstName: string, secondName: string, thirdName: string) =>{
  return firstName + secondName + thirdName
}

const FullName = () => {
  const name = "Maru";
  return (
    <View>
      <Text style={{color:Colors.light, }}>Hello, I am {getFullName("Tom","Jim","Lily")}!</Text>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
        }}
          defaultValue="Name msse!">

        </TextInput>
    </View>
  );
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TextUsage/>
          <FlexBasic/>
          <ImageBgComponent/>
          <FlexPercentageBasic/>
          <FlexJustifyContent/>
          <Cafe/>
          <InputTextComponent/>
          <InputTextPropsComponent/>
          <FlatListComponent/>
          <ListComponent/>
          <ListComponent2/>
          <ConditionRenderComponent/>
          <Toggle/>


          <ActivityIndicatorDemo/>
          <ButtonDemo/>
          <KeybordAvoidingViewComponent/>
          <ModalComponent/>

          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More2">
            Read the docs to discover what to do next22:
          </Section>

          <LearnMoreLinks />
        </View>
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

export default App;
