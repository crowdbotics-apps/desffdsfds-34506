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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/221c/6e45/33b61076b3b964f708e82301b9337d91"
        }}
        style={styles.ImageBackground_2_9087}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9ae/c71a/34ad3dd7c42c751dc55e4d3fe0c1c0dd"
        }}
        style={styles.ImageBackground_2_394}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe07/b9d3/7b7e4451fcbeceb2c5be11ef40709bc2"
        }}
        style={styles.ImageBackground_2_395}
      />
      <View style={styles.View_2_396}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edef/6215/b16324acdba1d87a8ffb0ab02a598ad8"
          }}
          style={styles.ImageBackground_2_397}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/455a/176c/f6f553fc8f47043344689eeb8a81b2ff"
          }}
          style={styles.ImageBackground_2_398}
        />
      </View>
      <View style={styles.View_2_399}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5aba/0a7a/4e8824ba315eae8feb43e9c0bfa314a7"
          }}
          style={styles.ImageBackground_2_400}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d8/1c09/1044660396b7ebd65ae9f87b15a4bdeb"
          }}
          style={styles.ImageBackground_2_401}
        />
      </View>
      <View style={styles.View_2_402}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/367d/257f/f76e6aafaf9c7e55333ea2b158aaa7fc"
          }}
          style={styles.ImageBackground_2_403}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/442c/6631/77983bc41adfddccb55b0cca724190a6"
          }}
          style={styles.ImageBackground_2_404}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("115%") },
  ImageBackground_2_9087: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  ImageBackground_2_394: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("6%")
  },
  ImageBackground_2_395: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("55%")
  },
  View_2_396: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("-7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_397: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_398: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    resizeMode: "cover"
  },
  View_2_399: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("-7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_400: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_401: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    resizeMode: "cover"
  },
  View_2_402: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("-7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_403: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_404: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
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
