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
      <View style={styles.View_2_120}>
        <View style={styles.View_2_121}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b6/ddf8/732d65dcb9b68ae720dd5a08fe7c61df"
            }}
            style={styles.ImageBackground_2_122}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b1f/2439/2c89e4669902c8589c9f695464cfa1dc"
            }}
            style={styles.ImageBackground_2_123}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/808d/3f28/ea3353bd69acb12ecd66f60c835f8bfc"
            }}
            style={styles.ImageBackground_2_124}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89d/cbd7/2933b5137b5d6963ce9d1068ce4dda3d"
            }}
            style={styles.ImageBackground_2_125}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bddc/f5e0/439b352ac6d0f71c20299636c20ae0ae"
            }}
            style={styles.ImageBackground_2_126}
          />
        </View>
        <View style={styles.View_2_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db9a/e277/d99154a5bc453bab7096391dff17a3cd"
            }}
            style={styles.ImageBackground_2_128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfa8/cec1/5590e5ff634136fa603d54df5a266610"
            }}
            style={styles.ImageBackground_2_129}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a57/1759/f3a4a95e72c0c3df3dcc1ffb99bb29b0"
            }}
            style={styles.ImageBackground_2_130}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74e5/3bcb/de27155ee59f107216800b3ea8ce6a06"
            }}
            style={styles.ImageBackground_2_131}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c50/e580/2746b1bee511363e680f2ae37ee61d45"
            }}
            style={styles.ImageBackground_2_132}
          />
        </View>
      </View>
      <View style={styles.View_2_133}>
        <Text style={styles.Text_2_133}>Trendy &amp; Modern Design</Text>
      </View>
      <View style={styles.View_2_134}>
        <View style={styles.View_2_135}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb43/f36b/2ca4dec96a8f038a860c64943e5d889d"
            }}
            style={styles.ImageBackground_2_136}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f919/829a/296d7f93ddb7bc6e55ffadb5d2aeb6cc"
            }}
            style={styles.ImageBackground_2_137}
          />
        </View>
        <View style={styles.View_2_138}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7d8/5c19/fb6444a2be9fd8172bb0db904e96f655"
            }}
            style={styles.ImageBackground_2_139}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3723/3029/7e8fd42429e5955b9376b7308d28e76d"
            }}
            style={styles.ImageBackground_2_140}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ccf/3b4b/312d8c5bf007b02a8092b9f0b6d3817b"
          }}
          style={styles.ImageBackground_2_141}
        />
      </View>
      <View style={styles.View_2_142}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ffe/211f/9cbc1194a5c56d479bd4d3ef5fc9debb"
          }}
          style={styles.ImageBackground_2_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/125b/3317/e85cf593893ccfa3182fd625cbce07a4"
          }}
          style={styles.ImageBackground_2_144}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("683%") },
  View_2_120: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("209%"),
    minHeight: hp("209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("460%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_121: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_122: {
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
  ImageBackground_2_123: {
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
  ImageBackground_2_124: {
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
  ImageBackground_2_125: {
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
  ImageBackground_2_126: {
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
  View_2_127: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_128: {
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
  ImageBackground_2_129: {
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
  ImageBackground_2_130: {
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
  ImageBackground_2_131: {
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
  ImageBackground_2_132: {
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
  View_2_133: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("26%"),
    justifyContent: "center"
  },
  Text_2_133: {
    color: "rgba(25, 193, 121, 1)",
    fontSize: 80,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_134: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("170%"),
    minHeight: hp("170%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("64%")
  },
  View_2_135: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("146%"),
    minHeight: hp("146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_136: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("147%"),
    minHeight: hp("147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_137: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("147%"),
    minHeight: hp("147%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_138: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("142%"),
    minHeight: hp("142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_139: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("146%"),
    minHeight: hp("146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-2%"),
    resizeMode: "cover"
  },
  ImageBackground_2_140: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("146%"),
    minHeight: hp("146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("-2%"),
    resizeMode: "cover"
  },
  ImageBackground_2_141: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("159%"),
    minHeight: hp("159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2_142: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("203%"),
    minHeight: hp("203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("240%")
  },
  ImageBackground_2_143: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("193%"),
    minHeight: hp("193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  ImageBackground_2_144: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("203%"),
    minHeight: hp("203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
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
