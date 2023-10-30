import { FC } from 'react'
import styles from './styles.module.scss'
import CopyIcon from 'assets/icons/copy'
import toast from 'react-hot-toast'

interface ClipboardFieldProps {
  value: string
}

const ClipboardField: FC<ClipboardFieldProps> = ({ value }) => {
  const copyToClipoard = async () => {
    if (!navigator.clipboard) {
      toast.error('Clipboard API not supported.')
      return
    }
    await navigator.clipboard.writeText(value)
    toast.success('Copied to clipboard!')
  }

  return (
    <div className={styles.clipboardWrapper}>
      <span className={styles.clipboardWrapperField}>{value}</span>
      <CopyIcon
        className={styles.clipboardWrapperIcon}
        onClick={copyToClipoard}
      />
    </div>
  )
}

export default ClipboardField
