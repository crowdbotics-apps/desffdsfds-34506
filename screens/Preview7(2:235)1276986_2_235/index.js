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
      <View style={styles.View_2_236}>
        <View style={styles.View_2_237}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5252/b2ba/daa90eed74b0532aa770e468be66fbf6"
            }}
            style={styles.ImageBackground_2_238}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1ee/4e54/1ce378620b7b5d6ec1cba153d7cb3196"
            }}
            style={styles.ImageBackground_2_239}
          />
        </View>
        <View style={styles.View_2_240}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ee/69a8/4a0cdf4131ddaa7244c67a289204a777"
            }}
            style={styles.ImageBackground_2_241}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bb9/be95/cbcc4e47d94bc9bea08f8554e509de22"
            }}
            style={styles.ImageBackground_2_242}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d51/e982/55021cb057364caed6e76123a706a368"
          }}
          style={styles.ImageBackground_2_243}
        />
      </View>
      <View style={styles.View_2_244}>
        <Text style={styles.Text_2_244}>Trendy &amp; Modern Design</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  View_2_236: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("41%")
  },
  View_2_237: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("119%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_238: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_239: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_240: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_241: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("119%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2%"),
    resizeMode: "cover"
  },
  ImageBackground_2_242: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("119%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("-2%"),
    resizeMode: "cover"
  },
  ImageBackground_2_243: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_244: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("16%"),
    justifyContent: "center"
  },
  Text_2_244: {
    color: "rgba(25, 193, 121, 1)",
    fontSize: 80,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
