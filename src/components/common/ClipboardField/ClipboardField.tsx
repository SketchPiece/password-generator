import { FC } from 'react'
import styles from './styles.module.scss'
import CopyIcon from 'assets/icons/copy'
import toast from 'react-hot-toast'

interface ClipboardFieldProps {
  value?: string
  onCopy?: () => void
}

const ClipboardField: FC<ClipboardFieldProps> = ({ value }) => {
  const copyToClipoard = async () => {
    if (!navigator.clipboard) {
      toast.error('Clipboard API not supported.')
    }
    await navigator.clipboard.writeText(value || '')
    toast.success('Copied to clipboard')
  }

  return (
    <div className={styles.clipboardWrapper}>
      <input className={styles.clipboardInput} readOnly value={value} />
      <CopyIcon className={styles.clipboardIcon} onClick={copyToClipoard} />
    </div>
  )
}

export default ClipboardField
