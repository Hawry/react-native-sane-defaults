import React, { Component } from 'react'
import { Text as NativeText } from 'react-native'
import styles from '../style'

class Text extends Component {
  render () {
    const { h1, h2, h3, h4, h5, h6, title, subtitle, note, style, bold, em, large, small, ...rest } = this.props

    const rawStyle = [styles.text, style]
    if (h1) rawStyle.push(styles.h1)
    if (h2) rawStyle.push(styles.h2)
    if (h3) rawStyle.push(styles.h3)
    if (h4) rawStyle.push(styles.h4)
    if (h5) rawStyle.push(styles.h5)
    if (h6) rawStyle.push(styles.h6)
    if (title) rawStyle.push(styles.bold)
    if (subtitle) rawStyle.push(styles.light)
    if (bold) rawStyle.push(styles.bold)
    if (em) rawStyle.push(styles.italic)
    if (large) rawStyle.push(styles.large)
    if (small) rawStyle.push(styles.small)

    return (
      <NativeText style={rawStyle} {...rest}/>
    )
  }
}

export default Text
