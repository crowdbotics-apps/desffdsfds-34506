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
      <View style={styles.View_2_146}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93dd/d399/2cc691b2d454d522cf124d3cf47abc16"
          }}
          style={styles.ImageBackground_2_147}
        />
        <View style={styles.View_2_148}>
          <View style={styles.View_2_149}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_150}
            />
            <View style={styles.View_2_151}>
              <Text style={styles.Text_2_151}>Well Organized Layers</Text>
            </View>
          </View>
          <View style={styles.View_2_152}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_153}
            />
            <View style={styles.View_2_154}>
              <Text style={styles.Text_2_154}>Fully Auto Layout</Text>
            </View>
          </View>
          <View style={styles.View_2_155}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_156}
            />
            <View style={styles.View_2_157}>
              <Text style={styles.Text_2_157}>Fully Customizable</Text>
            </View>
          </View>
          <View style={styles.View_2_158}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
              }}
              style={styles.ImageBackground_2_159}
            />
            <View style={styles.View_2_160}>
              <Text style={styles.Text_2_160}>Light &amp; Dark Mode</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_161}>
        <View style={styles.View_2_162}>
          <View style={styles.View_2_163}>
            <View style={styles.View_2_164}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_165}
              />
              <View style={styles.View_2_166}>
                <Text style={styles.Text_2_166}>70+ Screens</Text>
              </View>
            </View>
            <View style={styles.View_2_167}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_168}
              />
              <View style={styles.View_2_169}>
                <Text style={styles.Text_2_169}>
                  Figma, Sketch, XD, Invision
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_2_170}>
            <View style={styles.View_2_171}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_172}
              />
              <View style={styles.View_2_173}>
                <Text style={styles.Text_2_173}>Light &amp; Dark Mode</Text>
              </View>
            </View>
            <View style={styles.View_2_174}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_175}
              />
              <View style={styles.View_2_176}>
                <Text style={styles.Text_2_176}>
                  Big Design System Included
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_2_177}>
            <View style={styles.View_2_178}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_179}
              />
              <View style={styles.View_2_180}>
                <Text style={styles.Text_2_180}>
                  Pixel Perfect &amp; Grid System
                </Text>
              </View>
            </View>
            <View style={styles.View_2_181}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_182}
              />
              <View style={styles.View_2_183}>
                <Text style={styles.Text_2_183}>Fully Customizable</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_2_184}>
            <View style={styles.View_2_185}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_186}
              />
              <View style={styles.View_2_187}>
                <Text style={styles.Text_2_187}>Fully Auto Layout</Text>
              </View>
            </View>
            <View style={styles.View_2_188}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_189}
              />
              <View style={styles.View_2_190}>
                <Text style={styles.Text_2_190}>Well Organized Layers</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_2_191}>
            <View style={styles.View_2_192}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_193}
              />
              <View style={styles.View_2_194}>
                <Text style={styles.Text_2_194}>
                  Clean, Stylish &amp; Modern
                </Text>
              </View>
            </View>
            <View style={styles.View_2_195}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de2e/4d7f/e074f9c2b3a3b37b6b1f3443b13db21b"
                }}
                style={styles.ImageBackground_2_196}
              />
              <View style={styles.View_2_197}>
                <Text style={styles.Text_2_197}>Using Google Free Fonts</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2_198}>
          <Text style={styles.Text_2_198}>Product Features</Text>
        </View>
      </View>
      <View style={styles.View_2_199}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b1b/23db/e05f91d05b2d7baa562cd05a0227883b"
          }}
          style={styles.ImageBackground_2_9097}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea96/bb98/a4f1c3e6ceb568d75d9c6a501ed4f672"
          }}
          style={styles.ImageBackground_2_211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e98f/b3c7/0748338135e2a7650ed1832f45133a91"
          }}
          style={styles.ImageBackground_2_212}
        />
        <View style={styles.View_2_213}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab23/4dfa/5a131fc2f63fe75804b28a798bb722c1"
            }}
            style={styles.ImageBackground_2_214}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e29/bb4f/f1c1ce1b53724b5d7b0c0565dbfc6356"
            }}
            style={styles.ImageBackground_2_215}
          />
        </View>
        <View style={styles.View_2_216}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1763/d111/2d5d107e921b47772f57ca6b0a88c84a"
            }}
            style={styles.ImageBackground_2_217}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52c4/be4c/d5bfa852a2c7e3dbd92f5d4862a94ae2"
            }}
            style={styles.ImageBackground_2_218}
          />
        </View>
        <View style={styles.View_2_219}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/901b/2fd0/71c9dbc5e6b93f37246292b965ba974c"
            }}
            style={styles.ImageBackground_2_220}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6696/2d2a/8f106ac0c768d435eb3fc8f933624b4a"
            }}
            style={styles.ImageBackground_2_221}
          />
        </View>
      </View>
      <View style={styles.View_2_222}>
        <View style={styles.View_2_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf15/475a/2759fdc6d82c7a7771f16d6ad51ea24d"
            }}
            style={styles.ImageBackground_2_224}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593c/7c97/d0df3fb4797a28c8c2992b39fe4c44fd"
            }}
            style={styles.ImageBackground_2_225}
          />
        </View>
        <View style={styles.View_2_226}>
          <Text style={styles.Text_2_226}>BIG DESIGN SYSTEM</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03dc/40c7/2fd82d7c5aa7a854001cdbeb3a5be480"
          }}
          style={styles.ImageBackground_2_227}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(234, 255, 243, 1)" },
  View_2: { height: hp("683%") },
  View_2_146: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("186%"),
    minHeight: hp("186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("526%"),
    backgroundColor: "rgba(234, 255, 243, 1)",
    overflow: "hidden"
  },
  ImageBackground_2_147: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("162%"),
    minHeight: hp("162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("21%"),
    resizeMode: "cover"
  },
  View_2_148: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_149: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_150: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_151: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_151: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_152: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_153: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_154: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_154: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_155: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_156: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_157: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_157: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_158: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_159: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_160: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_160: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("186%"),
    minHeight: hp("186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("360%"),
    backgroundColor: "rgba(234, 255, 243, 1)",
    overflow: "hidden"
  },
  View_2_162: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("130%"),
    minHeight: hp("130%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_163: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_164: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_165: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_166: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_166: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_167: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_168: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_169: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_169: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_170: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_171: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_172: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_173: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_173: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_174: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_175: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_176: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_176: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_177: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_178: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_179: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_180: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_180: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_181: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_182: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_183: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_183: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_184: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_185: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_186: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_187: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_187: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_188: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_189: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_190: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_190: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_191: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("110%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_192: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_193: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_194: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_194: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_195: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_2_196: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_197: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_197: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 33,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_198: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_2_198: {
    color: "rgba(25, 193, 121, 1)",
    fontSize: 80,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_199: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("186%"),
    minHeight: hp("186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(234, 255, 243, 1)",
    overflow: "hidden"
  },
  ImageBackground_2_9097: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("43%"),
    resizeMode: "cover"
  },
  ImageBackground_2_211: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("164%"),
    minHeight: hp("164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("13%")
  },
  ImageBackground_2_212: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("93%")
  },
  View_2_213: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("273%"),
    minHeight: hp("273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("-22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_214: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("135%"),
    minHeight: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_215: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("135%"),
    minHeight: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%"),
    resizeMode: "cover"
  },
  View_2_216: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("273%"),
    minHeight: hp("273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("-22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_217: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("135%"),
    minHeight: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_218: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("135%"),
    minHeight: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%"),
    resizeMode: "cover"
  },
  View_2_219: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("273%"),
    minHeight: hp("273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("-22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_220: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("135%"),
    minHeight: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_221: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("135%"),
    minHeight: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%"),
    resizeMode: "cover"
  },
  View_2_222: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("186%"),
    minHeight: hp("186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("186%"),
    backgroundColor: "rgba(234, 255, 243, 1)",
    overflow: "hidden"
  },
  View_2_223: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("121%"),
    minHeight: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_224: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_225: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("121%"),
    minHeight: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%")
  },
  View_2_226: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%"),
    justifyContent: "center"
  },
  Text_2_226: {
    color: "rgba(25, 193, 121, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_227: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("162%"),
    minHeight: hp("162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
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
