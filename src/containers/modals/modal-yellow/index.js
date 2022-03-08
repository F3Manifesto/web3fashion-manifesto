import React from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@components/buttons/button'
import Modal from '@components/modal'
import { closeModalYellow } from '@actions/modals.actions'
import { getModalParams } from '@selectors/modal.selectors'
import styles from './styles.module.scss'

/**
 * This is a modal component with yellow background & blue text.
 * You can put title, body text, button text
 * @returns 
 */
const ModalYellow = () => {
  const dispatch = useDispatch()

  // get Params for modal
  const {
    title,
    buttonText,
    text,
    onClick
  } = useSelector(getModalParams)

  const handleClose = () => {
    dispatch(closeModalYellow())
  }

  return (
  <>
    {createPortal(
      <Modal
        onClose={() => handleClose()}
        title={title || 'Title'}
        className={styles.yellowModal}
        titleStyle={styles.title}
        text={[text || 'Message']}
        textStyle={styles.body}
        closeIcon='/images/cancel 1 (2).svg'
        closeIconStyle={styles.closeIcon}
      >
        <div className={styles.buttonWrapper}>
          <Button className={styles.button} onClick={() => onClick && onClick()}>
            { buttonText || 'Okay' }
          </Button>
        </div>
      </Modal>,
      document.body,
    )}
  </>
  )
}

export default ModalYellow
