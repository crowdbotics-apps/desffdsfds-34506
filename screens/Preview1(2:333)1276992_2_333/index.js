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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8076/ddb5/92f4bbd0982c1db9c8ae3dc66015ce44"
        }}
        style={styles.ImageBackground_2_9089}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea96/bb98/a4f1c3e6ceb568d75d9c6a501ed4f672"
        }}
        style={styles.ImageBackground_2_345}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e98f/b3c7/0748338135e2a7650ed1832f45133a91"
        }}
        style={styles.ImageBackground_2_346}
      />
      <View style={styles.View_2_347}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe79/b649/9e944c17c3671b8f70c3ae72279cedb9"
          }}
          style={styles.ImageBackground_2_348}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d86/64c5/19b2be18949399bf5c0f45104c81d7f9"
          }}
          style={styles.ImageBackground_2_349}
        />
      </View>
      <View style={styles.View_2_350}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7579/0b6c/e0da2a006439c7889dbe02bbadc58372"
          }}
          style={styles.ImageBackground_2_351}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac44/0581/122e2a9dc27280cbb5bd6b01e218f26c"
          }}
          style={styles.ImageBackground_2_352}
        />
      </View>
      <View style={styles.View_2_353}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5360/dde6/2bf6251ca666c9ca1149c2063ea97f1d"
          }}
          style={styles.ImageBackground_2_354}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a2a/49f2/866467cd32a3aae58d64289b03c3b3ae"
          }}
          style={styles.ImageBackground_2_355}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  ImageBackground_2_9089: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("107%"),
    minHeight: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%"),
    resizeMode: "cover"
  },
  ImageBackground_2_345: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("164%"),
    minHeight: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("13%")
  },
  ImageBackground_2_346: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("93%")
  },
  View_2_347: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("237%"),
    minHeight: hp("237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("-10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_348: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_349: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%"),
    resizeMode: "cover"
  },
  View_2_350: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("237%"),
    minHeight: hp("237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("-10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_351: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_352: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%"),
    resizeMode: "cover"
  },
  View_2_353: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("237%"),
    minHeight: hp("237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("-10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_354: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_355: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%"),
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
