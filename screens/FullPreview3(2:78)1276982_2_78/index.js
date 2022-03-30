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
      <View style={styles.View_2_79}>
        <View style={styles.View_2_80}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d6b/cb09/0943ffb213c55aceadf4e24985e42690"
            }}
            style={styles.ImageBackground_2_81}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b86f/b579/65f4b94eb37a679cfa29545f496eda9f"
            }}
            style={styles.ImageBackground_2_82}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35ce/3e80/4b6275237174ddf11e335ebe9eb779ba"
            }}
            style={styles.ImageBackground_2_83}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30bc/6eb7/c352f847cd620cf05c7621ba6795e1c4"
            }}
            style={styles.ImageBackground_2_84}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c4e/98aa/0faeb53a49fbd0789d8959b402ae7e78"
            }}
            style={styles.ImageBackground_2_85}
          />
        </View>
        <View style={styles.View_2_86}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/201b/04e4/ca47d1c2203a2b1880e6257135f7c836"
            }}
            style={styles.ImageBackground_2_87}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b45/29ac/05f8cc5285d41f031b94cc683014a9b8"
            }}
            style={styles.ImageBackground_2_88}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a5/da86/192d76fd8fcf90351abbbe52fbe3db1e"
            }}
            style={styles.ImageBackground_2_89}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f28/7bc9/e5b02b80c594dc0c6b0d02db16bc93ba"
            }}
            style={styles.ImageBackground_2_90}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/489c/6833/94854de00a6e0cf79c838e41adbd8f0f"
            }}
            style={styles.ImageBackground_2_91}
          />
        </View>
        <View style={styles.View_2_92}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89cd/924e/fca9d5a5fff765dffca2b57cc41c5630"
            }}
            style={styles.ImageBackground_2_93}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b3/ede3/30a2136cb1174335aca1a0eae8dd80b7"
            }}
            style={styles.ImageBackground_2_94}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f994/b3f3/d92764c3b70e10874bf1b0562dec632f"
            }}
            style={styles.ImageBackground_2_95}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/def9/a901/08d2457f0ffa02ca26ed904a2ffae8bf"
            }}
            style={styles.ImageBackground_2_96}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a79/56ec/41aae0c64d1575e0815a6a5f3c534e89"
            }}
            style={styles.ImageBackground_2_97}
          />
        </View>
        <View style={styles.View_2_98}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e0/ab05/cf1035d4908428be6784e83c38e31e97"
            }}
            style={styles.ImageBackground_2_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdda/4078/f196fa2769e002b0c7577ea0ed3fdc16"
            }}
            style={styles.ImageBackground_2_100}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b845/480b/bb2b81e5a79425cebe429f130cdfbc2b"
            }}
            style={styles.ImageBackground_2_101}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b49/f1d1/d8f7d3beff7692026fc8e3789aae88e1"
            }}
            style={styles.ImageBackground_2_102}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6692/7631/c22d3609a89e683027dc8563092788c7"
            }}
            style={styles.ImageBackground_2_103}
          />
        </View>
        <View style={styles.View_2_104}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d555/c5b4/d02d2753bebd3351617dfb22e500ed80"
            }}
            style={styles.ImageBackground_2_105}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3223/6aab/28a07c4e6c676c54b387c30d881e94c7"
            }}
            style={styles.ImageBackground_2_106}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2473/b368/325dfe056f8a9f8269191e1f6b00b7d3"
            }}
            style={styles.ImageBackground_2_107}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79f0/4656/bbdc24f5ea3f080ea6b9760274c919f5"
            }}
            style={styles.ImageBackground_2_108}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c454/96c3/c1e1534b53cae6051660aa8e42034969"
            }}
            style={styles.ImageBackground_2_109}
          />
        </View>
        <View style={styles.View_2_110}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/601b/dcea/dc368905003f0501565986fb3fe11273"
            }}
            style={styles.ImageBackground_2_111}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac7d/b2d7/3186fd968ad42cbb82752b7a167ed9f2"
            }}
            style={styles.ImageBackground_2_112}
          />
          <View style={styles.View_2_113}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/358f/81ee/54ec0c211d1cf8c377a4cc45aae72464"
              }}
              style={styles.ImageBackground_2_9095}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("683%") },
  View_2_79: {
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
  View_2_80: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_81: {
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
  ImageBackground_2_82: {
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
  ImageBackground_2_83: {
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
  ImageBackground_2_84: {
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
  ImageBackground_2_85: {
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
  View_2_86: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_87: {
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
  ImageBackground_2_88: {
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
  ImageBackground_2_89: {
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
  ImageBackground_2_90: {
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
  ImageBackground_2_91: {
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
  View_2_92: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("222%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_93: {
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
  ImageBackground_2_94: {
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
  ImageBackground_2_95: {
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
  ImageBackground_2_96: {
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
  ImageBackground_2_97: {
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
  View_2_98: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_99: {
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
  ImageBackground_2_100: {
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
  ImageBackground_2_101: {
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
  ImageBackground_2_102: {
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
  ImageBackground_2_103: {
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
  View_2_104: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("445%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_105: {
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
  ImageBackground_2_106: {
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
  ImageBackground_2_107: {
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
  ImageBackground_2_108: {
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
  ImageBackground_2_109: {
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
  View_2_110: {
    width: wp("91%"),
    height: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_111: {
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
  ImageBackground_2_112: {
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
  View_2_113: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_9095: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
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
