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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93dd/d399/2cc691b2d454d522cf124d3cf47abc16"
        }}
        style={styles.ImageBackground_2_272}
      />
      <View style={styles.View_2_273}>
        <View style={styles.View_2_274}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
            }}
            style={styles.ImageBackground_2_275}
          />
          <View style={styles.View_2_276}>
            <Text style={styles.Text_2_276}>Well Organized Layers</Text>
          </View>
        </View>
        <View style={styles.View_2_277}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
            }}
            style={styles.ImageBackground_2_278}
          />
          <View style={styles.View_2_279}>
            <Text style={styles.Text_2_279}>Fully Auto Layout</Text>
          </View>
        </View>
        <View style={styles.View_2_280}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
            }}
            style={styles.ImageBackground_2_281}
          />
          <View style={styles.View_2_282}>
            <Text style={styles.Text_2_282}>
              Pixel Perfect &amp; Grid System
            </Text>
          </View>
        </View>
        <View style={styles.View_2_283}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
            }}
            style={styles.ImageBackground_2_284}
          />
          <View style={styles.View_2_285}>
            <Text style={styles.Text_2_285}>Fully Customizable</Text>
          </View>
        </View>
        <View style={styles.View_2_286}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
            }}
            style={styles.ImageBackground_2_287}
          />
          <View style={styles.View_2_288}>
            <Text style={styles.Text_2_288}>Light &amp; Dark Mode</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  ImageBackground_2_272: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("162%"),
    minHeight: hp("162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("12%"),
    resizeMode: "cover"
  },
  View_2_273: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("123%"),
    minHeight: hp("123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_274: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_275: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_276: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_276: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_277: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_278: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_279: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_279: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_280: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_281: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_282: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_282: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_283: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_284: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_285: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_285: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_286: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_287: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_288: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_288: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
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
