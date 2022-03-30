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
      <View style={styles.View_2_328}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf15/475a/2759fdc6d82c7a7771f16d6ad51ea24d"
          }}
          style={styles.ImageBackground_2_329}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593c/7c97/d0df3fb4797a28c8c2992b39fe4c44fd"
          }}
          style={styles.ImageBackground_2_330}
        />
      </View>
      <View style={styles.View_2_331}>
        <Text style={styles.Text_2_331}>BIG DESIGN SYSTEM</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03dc/40c7/2fd82d7c5aa7a854001cdbeb3a5be480"
        }}
        style={styles.ImageBackground_2_332}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  View_2_328: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("121%"),
    minHeight: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_329: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_330: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("121%"),
    minHeight: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_2_331: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_2_331: {
    color: "rgba(25, 193, 121, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_332: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("162%"),
    minHeight: hp("162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("12%"),
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
