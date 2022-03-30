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
      <View style={styles.View_2_290}>
        <View style={styles.View_2_291}>
          <View style={styles.View_2_292}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_293}
            />
            <View style={styles.View_2_294}>
              <Text style={styles.Text_2_294}>70+ Screens</Text>
            </View>
          </View>
          <View style={styles.View_2_295}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_296}
            />
            <View style={styles.View_2_297}>
              <Text style={styles.Text_2_297}>Figma, Sketch, XD, Invision</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_298}>
          <View style={styles.View_2_299}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_300}
            />
            <View style={styles.View_2_301}>
              <Text style={styles.Text_2_301}>Light &amp; Dark Mode</Text>
            </View>
          </View>
          <View style={styles.View_2_302}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_303}
            />
            <View style={styles.View_2_304}>
              <Text style={styles.Text_2_304}>Big Design System Included</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_305}>
          <View style={styles.View_2_306}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_307}
            />
            <View style={styles.View_2_308}>
              <Text style={styles.Text_2_308}>
                Pixel Perfect &amp; Grid System
              </Text>
            </View>
          </View>
          <View style={styles.View_2_309}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_310}
            />
            <View style={styles.View_2_311}>
              <Text style={styles.Text_2_311}>Fully Customizable</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_312}>
          <View style={styles.View_2_313}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_314}
            />
            <View style={styles.View_2_315}>
              <Text style={styles.Text_2_315}>Fully Auto Layout</Text>
            </View>
          </View>
          <View style={styles.View_2_316}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_317}
            />
            <View style={styles.View_2_318}>
              <Text style={styles.Text_2_318}>Well Organized Layers</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_319}>
          <View style={styles.View_2_320}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_321}
            />
            <View style={styles.View_2_322}>
              <Text style={styles.Text_2_322}>Clean, Stylish &amp; Modern</Text>
            </View>
          </View>
          <View style={styles.View_2_323}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_324}
            />
            <View style={styles.View_2_325}>
              <Text style={styles.Text_2_325}>Using Google Free Fonts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_326}>
        <Text style={styles.Text_2_326}>Product Features</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  View_2_290: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_291: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_292: {
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
  ImageBackground_2_293: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_294: {
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
  Text_2_294: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_295: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_296: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_297: {
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
  Text_2_297: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_298: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_299: {
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
  ImageBackground_2_300: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_301: {
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
  Text_2_301: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_302: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_303: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_304: {
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
  Text_2_304: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_305: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_306: {
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
  ImageBackground_2_307: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_308: {
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
  Text_2_308: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_309: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_310: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_311: {
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
  Text_2_311: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_312: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_313: {
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
  ImageBackground_2_314: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_315: {
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
  Text_2_315: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_316: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_317: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_318: {
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
  Text_2_318: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_319: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_320: {
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
  ImageBackground_2_321: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_322: {
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
  Text_2_322: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_323: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_324: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_325: {
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
  Text_2_325: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_326: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_2_326: {
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
