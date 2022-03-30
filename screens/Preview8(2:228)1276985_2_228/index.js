import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bc6/3102/24936355489373c847643d1c7d81d34b"
        }}
        style={styles.ImageBackground_2_9091}
      />
      <View style={styles.View_2_232}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91c7/8e96/d31bdc4c51eb8f397bb92e391e60ce28"
          }}
          style={styles.ImageBackground_2_233}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8a9/cdca/335d64d13e570829f4ae0e804a7ab3da"
          }}
          style={styles.ImageBackground_2_234}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  ImageBackground_2_9091: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("79%"),
    minHeight: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("53%"),
    resizeMode: "cover"
  },
  View_2_232: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("193%"),
    minHeight: hp("193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("-6%")
  },
  ImageBackground_2_233: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("183%"),
    minHeight: hp("183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  ImageBackground_2_234: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("193%"),
    minHeight: hp("193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
