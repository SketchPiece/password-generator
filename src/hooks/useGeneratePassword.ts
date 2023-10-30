import { TPasswordGeneratorSettings } from 'components/PasswordGenerator/schema'
import { getRandomIndex } from 'helpers/getRandomIndex'
import { useState } from 'react'

export const useGeneratePassword = () => {
  const [randomPassword, setRandomPassword] = useState('')

  const generatePassword = (props: TPasswordGeneratorSettings) => {
    const charSets = {
      includeLowercase: 'abcdefghijklmnopqrstuvwxyz',
      includeUppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      includeNumbers: '0123456789',
      includeSymbols: '!@#$%^&*()_+[]{}|;:,.<>?',
    }

    let chars = ''

    for (const key in charSets) {
      if (props[key as keyof TPasswordGeneratorSettings]) {
        chars += charSets[key as keyof typeof charSets]
      }
    }

    let generatedPassword = ''
    for (let i = 0; i < (props.length || 10); i++) {
      generatedPassword += chars[getRandomIndex(chars.length)]
    }

    setRandomPassword(generatedPassword)
  }

  const reset = () => {
    setRandomPassword('')
  }

  return [randomPassword, { reset, generatePassword }] as const
}
