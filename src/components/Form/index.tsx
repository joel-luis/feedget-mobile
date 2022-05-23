import React from 'react'
import { ArrowLeft } from 'phosphor-react-native'
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native'

import { FeedBackTypes } from '../../components/Widget'
import { ScreenShotButton } from '../../components/ScreenShotButton'
import { Button } from '../../components/Button'
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
      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <ScreenShotButton
          onTakeShot={() => <></>}
          onRemoveShot={() => <></>}
          screenshot=""
        />
        <Button isLoading={false} />
      </View>
    </View>
  )
}
