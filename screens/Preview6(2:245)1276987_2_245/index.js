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
      <View style={styles.View_2_246}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abc8/42f6/4253c78714a3cd975dc7bb6f539ad929"
          }}
          style={styles.ImageBackground_2_247}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8a0/3930/0168fd681e838e407729c9505e99853b"
          }}
          style={styles.ImageBackground_2_248}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c87e/2b60/39e38b1923f95391dc5b999df0701e31"
          }}
          style={styles.ImageBackground_2_249}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8702/6a16/869afd5bb2ac588d6f1ff3969f478833"
          }}
          style={styles.ImageBackground_2_250}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60f4/cf3d/fb57ba1d34fae34805128b2fb6019641"
          }}
          style={styles.ImageBackground_2_251}
        />
      </View>
      <View style={styles.View_2_252}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27bd/3516/52348ddc2bd5b7aef7cf59e3afa0db1c"
          }}
          style={styles.ImageBackground_2_253}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ecd/56fc/6160912b6494f6b5ab04c171ac8534c8"
          }}
          style={styles.ImageBackground_2_254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acd2/1380/0de7753d79a8e517e78ced4ccfd8dcd0"
          }}
          style={styles.ImageBackground_2_255}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81d3/3fa0/5148b90dbc0fc0e83a4da91cab5fe58a"
          }}
          style={styles.ImageBackground_2_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a3/09a4/7f88ecb1a5413199d236079f25db7daa"
          }}
          style={styles.ImageBackground_2_257}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("186%") },
  View_2_246: {
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
  ImageBackground_2_247: {
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
  ImageBackground_2_248: {
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
  ImageBackground_2_249: {
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
  ImageBackground_2_250: {
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
  ImageBackground_2_251: {
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
  View_2_252: {
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
  ImageBackground_2_253: {
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
  ImageBackground_2_254: {
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
  ImageBackground_2_255: {
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
  ImageBackground_2_256: {
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
  ImageBackground_2_257: {
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
