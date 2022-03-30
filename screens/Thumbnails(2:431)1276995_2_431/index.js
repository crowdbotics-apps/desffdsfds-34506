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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea96/bb98/a4f1c3e6ceb568d75d9c6a501ed4f672"
        }}
        style={styles.ImageBackground_2_432}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e98f/b3c7/0748338135e2a7650ed1832f45133a91"
        }}
        style={styles.ImageBackground_2_433}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b1b/23db/e05f91d05b2d7baa562cd05a0227883b"
        }}
        style={styles.ImageBackground_2_9098}
      />
      <View style={styles.View_2_9108}>
        <View style={styles.View_2_9099}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5605/eb1b/0db979d3b30397995a4eaae5009fe102"
            }}
            style={styles.ImageBackground_2_9100}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaf0/4195/ca5935c41a9d7a091d194448584b0393"
            }}
            style={styles.ImageBackground_2_9101}
          />
        </View>
        <View style={styles.View_2_9102}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be1/714e/a085777cfe3432219156047903581df6"
            }}
            style={styles.ImageBackground_2_9103}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e31/6d5b/951f164f6ebe5a36e7f30cd98e598d07"
            }}
            style={styles.ImageBackground_2_9104}
          />
        </View>
        <View style={styles.View_2_9105}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a97/8eda/214310672c58bdab99933be47c2ebc16"
            }}
            style={styles.ImageBackground_2_9106}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/562b/e3dc/cd2797c78c00cbb435fba5cf591cdbe8"
            }}
            style={styles.ImageBackground_2_9107}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("131%") },
  ImageBackground_2_432: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("164%"),
    minHeight: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("4%")
  },
  ImageBackground_2_433: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("83%")
  },
  ImageBackground_2_9098: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%"),
    resizeMode: "cover"
  },
  View_2_9108: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("170%"),
    minHeight: hp("170%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("-19%")
  },
  View_2_9099: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("170%"),
    minHeight: hp("170%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_9100: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_9101: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86%"),
    resizeMode: "cover"
  },
  View_2_9102: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("170%"),
    minHeight: hp("170%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_9103: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_9104: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86%"),
    resizeMode: "cover"
  },
  View_2_9105: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("170%"),
    minHeight: hp("170%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_9106: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_9107: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("84%"),
    minHeight: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86%"),
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
