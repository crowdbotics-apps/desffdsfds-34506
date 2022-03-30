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
      <View style={styles.View_2_357}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e12d/dc3b/62050aa6078f4e1c1549f40b592cfd6a"
          }}
          style={styles.ImageBackground_2_358}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f4e/f88f/84675043ccfc68c62bcef756c657cf57"
          }}
          style={styles.ImageBackground_2_359}
        />
      </View>
      <View style={styles.View_2_360}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c37/c820/d9fd08f37631ad4f10e1167d0cd09d1b"
          }}
          style={styles.ImageBackground_2_361}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b5a/3e1f/f50160887d48f64a525397ace311cdbc"
          }}
          style={styles.ImageBackground_2_362}
        />
      </View>
      <View style={styles.View_2_363}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/205b/6835/4a324586eb919904e703a81278705c5c"
          }}
          style={styles.ImageBackground_2_364}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/482a/b65c/9d69d6002638cd0947673e83bee6bf09"
          }}
          style={styles.ImageBackground_2_365}
        />
      </View>
      <View style={styles.View_2_366}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e874/8c78/24ea162a7686a6af32fcf9468a4f9a06"
          }}
          style={styles.ImageBackground_2_367}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980f/4461/7d5915a61647e5e888e292f97fc36387"
          }}
          style={styles.ImageBackground_2_368}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("100%") },
  View_2_357: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("180%"),
    minHeight: hp("180%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("-33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_358: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_359: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
    resizeMode: "cover"
  },
  View_2_360: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("180%"),
    minHeight: hp("180%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-41%"),
    top: hp("-33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_361: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_362: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
    resizeMode: "cover"
  },
  View_2_363: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("180%"),
    minHeight: hp("180%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("-33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_364: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_365: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
    resizeMode: "cover"
  },
  View_2_366: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("180%"),
    minHeight: hp("180%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("-33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_367: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_368: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
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
