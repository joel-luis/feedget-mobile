import React from 'react'
import { ArrowLeft } from 'phosphor-react-native'
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native'

import { FeedBackTypes } from '../../components/Widget'
import { feedbackTypes } from '../../utils/feedbackTypes'

import { styles } from './styles'
import { theme } from '../../theme'

interface Props {
  feedBackType: FeedBackTypes
}

export function Form({ feedBackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedBackType]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>
    </View>
  )
}
