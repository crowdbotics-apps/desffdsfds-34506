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
      <View style={styles.View_2_25}>
        <View style={styles.View_2_26}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a21b/298d/c4af77234caf7f6212d5245ba986a9b7"
            }}
            style={styles.ImageBackground_2_27}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f7/92d9/248bf7d8062c60e2cf3e0948cc41e7a5"
            }}
            style={styles.ImageBackground_2_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e344/0af5/67354409bc72a2d17ddf748bbdfef154"
            }}
            style={styles.ImageBackground_2_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e67/0ea9/51364df3f0b6a55a5468e4491c65bcce"
            }}
            style={styles.ImageBackground_2_30}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab16/dd1e/87746a1d84f0e1c36734c3c5bc9a5000"
            }}
            style={styles.ImageBackground_2_31}
          />
        </View>
        <View style={styles.View_2_32}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c660/c36f/1dbd6ef98719ba069d637495946096e3"
            }}
            style={styles.ImageBackground_2_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8c/342c/6467d87a6fa7b5362b0c7b8d5b2f6d33"
            }}
            style={styles.ImageBackground_2_34}
          />
          <View style={styles.View_2_35}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de54/4911/9cab67f6261ad80ba6e11a22007842e2"
              }}
              style={styles.ImageBackground_2_9093}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("239%") },
  View_2_25: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("209%"),
    minHeight: hp("209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_26: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_27: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_28: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_29: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_30: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_31: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_32: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_33: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_34: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_35: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_9093: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
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
