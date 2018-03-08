import { StyleSheet } from 'react-native'
import { mScale } from './helpers'
import { metrics, size } from './metrics'
import { colors } from './colors'

const style = {
  topContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: '#ECF0F1'
  },
  container: {
    padding: metrics.basePadding,
    margin: metrics.baseMargin
  },
  text: {
    fontSize: size.regular
  },
  h1: {
    fontSize: size.h1,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: size.h2,
    fontWeight: 'bold'
  },
  h3: {
    fontSize: size.h3,
    fontWeight: 'bold'
  },
  h4: {
    fontSize: size.h4,
    fontWeight: 'bold'
  },
  h5: {
    fontSize: size.h5,
    fontWeight: 'bold'
  },
  h6: {
    fontSize: size.h6,
    fontWeight: 'bold'
  },
  bold: {
    fontWeight: 'bold'
  },
  light: {
    fontWeight: '100',
    color: 'rgba(0,0,0,0.6)'
  },
  italic: {
    fontStyle: 'italic'
  },
  small: {
    fontSize: size.small
  },
  large: {
    fontSize: size.large
  },
  defaultButton: {
    padding: metrics.basePadding,
    elevation: 4,
    borderRadius: metrics.basePadding/2,
    backgroundColor: '#3D88EC',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  roundedButton: {
    borderRadius: 50
  },
  defaultButtonText: {
    fontSize: size.regular,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  successButton: {
    backgroundColor: colors.success.color
  },
  successButtonText: {
    color: colors.success.text,
    fontWeight: colors.success.weight
  },
  dangerButton: {
    backgroundColor: colors.danger.color
  },
  dangerButtonText: {
    color: colors.danger.text,
    fontWeight: colors.danger.weight
  },
  neutralButton: {
    backgroundColor: colors.neutral.color
  },
  neutralButtonText: {
    color: colors.neutral.text,
    fontWeight: colors.neutral.weight
  },
  disabledButton: {
    backgroundColor: '#F1F1F1'
  },
  disabledButtonText: {
    color: '#C2C2C2'
  }
}

export default styles = StyleSheet.create({...style})


//
// #####  Color Palette by Paletton.com
// #####  Palette URL: http://paletton.com/#uid=63r0u0kehiJ7usbbln0ioeDnlbM
//
//
// *** Primary color:
//
//    shade 0 = #36525E = rgb( 54, 82, 94) = rgba( 54, 82, 94,1) = rgb0(0.212,0.322,0.369)
//    shade 1 = #6E848D = rgb(110,132,141) = rgba(110,132,141,1) = rgb0(0.431,0.518,0.553)
//    shade 2 = #4C6874 = rgb( 76,104,116) = rgba( 76,104,116,1) = rgb0(0.298,0.408,0.455)
//    shade 3 = #213D49 = rgb( 33, 61, 73) = rgba( 33, 61, 73,1) = rgb0(0.129,0.239,0.286)
//    shade 4 = #122F3B = rgb( 18, 47, 59) = rgba( 18, 47, 59,1) = rgb0(0.071,0.184,0.231)
//
// *** Secondary color (1):
//
//    shade 0 = #3F4466 = rgb( 63, 68,102) = rgba( 63, 68,102,1) = rgb0(0.247,0.267,0.4)
//    shade 1 = #7B7F9A = rgb(123,127,154) = rgba(123,127,154,1) = rgb0(0.482,0.498,0.604)
//    shade 2 = #575C7E = rgb( 87, 92,126) = rgba( 87, 92,126,1) = rgb0(0.341,0.361,0.494)
//    shade 3 = #282E50 = rgb( 40, 46, 80) = rgba( 40, 46, 80,1) = rgb0(0.157,0.18,0.314)
//    shade 4 = #171D40 = rgb( 23, 29, 64) = rgba( 23, 29, 64,1) = rgb0(0.09,0.114,0.251)
//
// *** Secondary color (2):
//
//    shade 0 = #3B6B4F = rgb( 59,107, 79) = rgba( 59,107, 79,1) = rgb0(0.231,0.42,0.31)
//    shade 1 = #7CA18B = rgb(124,161,139) = rgba(124,161,139,1) = rgb0(0.486,0.631,0.545)
//    shade 2 = #558468 = rgb( 85,132,104) = rgba( 85,132,104,1) = rgb0(0.333,0.518,0.408)
//    shade 3 = #245437 = rgb( 36, 84, 55) = rgba( 36, 84, 55,1) = rgb0(0.141,0.329,0.216)
//    shade 4 = #124326 = rgb( 18, 67, 38) = rgba( 18, 67, 38,1) = rgb0(0.071,0.263,0.149)
//
// *** Complement color:
//
//    shade 0 = #957653 = rgb(149,118, 83) = rgba(149,118, 83,1) = rgb0(0.584,0.463,0.325)
//    shade 1 = #E1C8AC = rgb(225,200,172) = rgba(225,200,172,1) = rgb0(0.882,0.784,0.675)
//    shade 2 = #B79976 = rgb(183,153,118) = rgba(183,153,118,1) = rgb0(0.718,0.6,0.463)
//    shade 3 = #755532 = rgb(117, 85, 50) = rgba(117, 85, 50,1) = rgb0(0.459,0.333,0.196)
//    shade 4 = #5E3E19 = rgb( 94, 62, 25) = rgba( 94, 62, 25,1) = rgb0(0.369,0.243,0.098)
//
//
// #####  Generated by Paletton.com (c) 2002-2014
