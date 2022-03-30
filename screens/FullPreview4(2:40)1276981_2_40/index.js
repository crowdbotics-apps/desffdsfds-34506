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
      <View style={styles.View_2_41}>
        <View style={styles.View_2_42}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0feb/7bfe/142c9b791c8bd0746c689d68cafd1ea0"
            }}
            style={styles.ImageBackground_2_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c55d/0925/c84b5d0b68f089d6e3beb43a1744b693"
            }}
            style={styles.ImageBackground_2_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca15/bcf4/0149be0560cc0cd35b56c69aec06afb4"
            }}
            style={styles.ImageBackground_2_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b49c/47cb/be21e50e6df2aca050fb14a4fe218849"
            }}
            style={styles.ImageBackground_2_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428a/3200/905a87be914009a157bb4183660f9887"
            }}
            style={styles.ImageBackground_2_47}
          />
        </View>
        <View style={styles.View_2_48}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b41/c9c1/3c5c2f4197d43e578eee665505309e60"
            }}
            style={styles.ImageBackground_2_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ac/fd00/f5a0ec760af41de6b38f8f739270ed51"
            }}
            style={styles.ImageBackground_2_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5725/71d0/dc5dc828ccd36dd28203363893421cdf"
            }}
            style={styles.ImageBackground_2_51}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa4e/089d/c698e2a9ea73e7fb98d762a0f670214a"
            }}
            style={styles.ImageBackground_2_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26ea/98d1/f50cf7dc60743b6d831f5bf461a81637"
            }}
            style={styles.ImageBackground_2_53}
          />
        </View>
        <View style={styles.View_2_54}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9bd/dc6a/328107ce3a58838ae87f433923a1eb4f"
            }}
            style={styles.ImageBackground_2_55}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1991/bb3e/879b146d8aed10df755072901647a574"
            }}
            style={styles.ImageBackground_2_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b4/f8b4/c732618f1967fc0b18edb969165302d2"
            }}
            style={styles.ImageBackground_2_57}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21ee/32c1/139596469443910fadb3f40b437f9246"
            }}
            style={styles.ImageBackground_2_58}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49d1/41a2/c39590ca1f96aac327e8c735673a4bf4"
            }}
            style={styles.ImageBackground_2_59}
          />
        </View>
        <View style={styles.View_2_60}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cea/8d4e/508ddb04a90e871a374da19a09d67d2d"
            }}
            style={styles.ImageBackground_2_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d58/4031/f56f0d4a92c6e30deda75934dfa7cdef"
            }}
            style={styles.ImageBackground_2_62}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1b6/1d62/fad96a2ff7e438dd0fa4dd3e99508a89"
            }}
            style={styles.ImageBackground_2_63}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b01/5267/a0954fea1a8ac576e4f05f65bff002f5"
            }}
            style={styles.ImageBackground_2_64}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3dd/f9b8/819d3bbc20a99ea7e83c7393ee6a1515"
            }}
            style={styles.ImageBackground_2_65}
          />
        </View>
        <View style={styles.View_2_66}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50b2/aca5/5d6f1abeca14d3b2c7f270573d330019"
            }}
            style={styles.ImageBackground_2_67}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5195/cdf4/caf026ada92a7c8ff7e69e7d642adba6"
            }}
            style={styles.ImageBackground_2_68}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2f4/367d/4e9c837d03aa9c16c04da6852437871d"
            }}
            style={styles.ImageBackground_2_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cc8/caba/45ccb1604dc2fb48624d965a1bd91ed5"
            }}
            style={styles.ImageBackground_2_70}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8b0/3ce9/5e894fda26947b76bb879eb44be0792d"
            }}
            style={styles.ImageBackground_2_71}
          />
        </View>
        <View style={styles.View_2_72}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c22b/62bf/d5cc3eb6812ff30fa0579bc53115912a"
            }}
            style={styles.ImageBackground_2_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef4/93d7/228008f7f65f41aa3a9175af108a644f"
            }}
            style={styles.ImageBackground_2_74}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60f6/6a46/907eed22f42e5ddb16c6aa01cfac797c"
            }}
            style={styles.ImageBackground_2_75}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a42e/a631/c93f15885d3557d8a20615153c4607fd"
            }}
            style={styles.ImageBackground_2_76}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8af1/7f74/6fb56ec9cb2d99d6930a2ccbc9f29766"
            }}
            style={styles.ImageBackground_2_77}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("683%") },
  View_2_41: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("654%"),
    minHeight: hp("654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_42: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_43: {
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
  ImageBackground_2_44: {
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
  ImageBackground_2_45: {
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
  ImageBackground_2_46: {
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
  ImageBackground_2_47: {
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
  View_2_48: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_49: {
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
  ImageBackground_2_50: {
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
  ImageBackground_2_51: {
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
  ImageBackground_2_52: {
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
  ImageBackground_2_53: {
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
  View_2_54: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("222%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_55: {
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
  ImageBackground_2_56: {
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
  ImageBackground_2_57: {
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
  ImageBackground_2_58: {
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
  ImageBackground_2_59: {
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
  View_2_60: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_61: {
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
  ImageBackground_2_62: {
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
  ImageBackground_2_63: {
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
  ImageBackground_2_64: {
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
  ImageBackground_2_65: {
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
  View_2_66: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("445%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_67: {
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
  ImageBackground_2_68: {
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
  ImageBackground_2_69: {
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
  ImageBackground_2_70: {
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
  ImageBackground_2_71: {
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
  View_2_72: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_73: {
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
  ImageBackground_2_74: {
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
  ImageBackground_2_75: {
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
  ImageBackground_2_76: {
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
  ImageBackground_2_77: {
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
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
