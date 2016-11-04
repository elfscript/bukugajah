import React from 'react'
import { Header, Modal } from 'semantic-ui-react'

const CustomModalUI = props => (
  <Modal trigger={props.children}>
    <Modal.Header>{props.modalHeader}</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>{props.modalDescriptionHeader}</Header>
        <p>{props.modalDescription}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

CustomModalUI.propTypes = {
  children: React.PropTypes.element,
  modalHeader: React.PropTypes.string,
  modalDescriptionHeader: React.PropTypes.string,
  modalDescription: React.PropTypes.string,
}

export default CustomModalUI
