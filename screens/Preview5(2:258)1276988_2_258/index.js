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
      <View style={styles.View_2_259}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53a7/0af4/1a746fe9b6218bcd7ec53c49e5d47ead"
          }}
          style={styles.ImageBackground_2_260}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8626/7382/4b4fc418297f78c6107205f29636f7b7"
          }}
          style={styles.ImageBackground_2_261}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b25/b9de/70529314df0aa5b88de0f8ac41ecddc6"
          }}
          style={styles.ImageBackground_2_262}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6804/bc17/ed4c1542cf336ae68961f79757c05698"
          }}
          style={styles.ImageBackground_2_263}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/769f/9271/eeeb94c7d9b237a64329c1df374c80ab"
          }}
          style={styles.ImageBackground_2_264}
        />
      </View>
      <View style={styles.View_2_265}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/532a/f65c/06fbe2c15c901b6016008aeb240918c7"
          }}
          style={styles.ImageBackground_2_266}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a260/8c24/2db9ffac2d8de71d85be241de8001034"
          }}
          style={styles.ImageBackground_2_267}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c5b/fda4/dddc011c9ffc743a081f98af46484949"
          }}
          style={styles.ImageBackground_2_268}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e25/bcff/b479730a4ec4b6a3204bcb6b9143def9"
          }}
          style={styles.ImageBackground_2_269}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2603/b939/1ea09cc8b9928d33a4c92f0d76162c74"
          }}
          style={styles.ImageBackground_2_270}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  View_2_259: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_260: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_261: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_262: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_263: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_264: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_265: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_266: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_267: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_268: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_269: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_270: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
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
