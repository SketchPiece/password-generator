import { FC } from 'react'
import { useGeneratePassword } from 'hooks/useGeneratePassword'
import { useForm } from 'react-hook-form'
import Input from 'components/common/Input'
import Button from 'components/common/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  passwordGeneratorSettingsSchema,
  TPasswordGeneratorSettings,
} from './schema'
import ClipboardField from 'components/common/ClipboardField/'
import { settings } from 'helpers/constants'
import styles from './styles.module.scss'

interface PasswordGeneratorProps {
  className?: string
}

const PasswordGenerator: FC<PasswordGeneratorProps> = () => {
  const [password, { generatePassword, reset }] = useGeneratePassword()

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<TPasswordGeneratorSettings>({
    resolver: zodResolver(passwordGeneratorSettingsSchema),
    defaultValues: {
      length: 1,
    },
  })

  const onSubmit = (values: TPasswordGeneratorSettings) => {
    generatePassword(values)
  }

  const passwordLength = watch('length')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.passwordGenerator}
    >
      <ClipboardField value={password} />
      <div className={styles.passwordGeneratorSettings}>
        <Input
          {...register('length', { valueAsNumber: true, max: 50, min: 1 })}
          type="range"
          style={{ width: '100%' }}
          label={`Character length: ${passwordLength}`}
          labelDirection="column"
          min={1}
          max={50}
        />
        {settings.map((el) => (
          <Input
            key={el}
            {...register(`include${el}`)}
            style={{ width: '1.5rem', height: '1.5rem' }}
            type="checkbox"
            label={`Include ${el}`}
          />
        ))}
      </div>
      <div className={styles.passwordGeneratorFooter}>
        <Button disabled={!isValid}>
          {!password ? 'Generate' : 'Regenerate'}
        </Button>
        {password && (
          <Button color="secondary" onClick={reset}>
            Clear
          </Button>
        )}
      </div>
    </form>
  )
}

export default PasswordGenerator
