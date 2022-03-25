import React from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '@components/modal'
import { closeModalContent } from '@actions/modals.actions'
import { getModalParams } from '@selectors/modal.selectors'
import styles from './styles.module.scss'

/**
 * This is a modal component with yellow background & blue text.
 * You can put title, body text, button text
 * @returns 
 */
const ModalContent = () => {
  const dispatch = useDispatch()

  // get Params for modal
  const {
    isVideo,
    link
  } = useSelector(getModalParams)


  const handleClose = () => {
    dispatch(closeModalContent())
  }

  return (
  <>
    {createPortal(
      <Modal
        className={styles.contentModal}
        withCloseIcon={false}
      >
        <div
          className={styles.zoomWrapper}
          onClick={() => handleClose()}
        >
        {
          isVideo ? 
          (
            <video playsInline autoPlay loop muted>
              <source src={link} type='video/mp4' />
            </video>
          ) : (
            <img src={link} />
          )
        }
        </div>
      </Modal>,
      document.body,
    )}
  </>
  )
}

export default ModalContent
