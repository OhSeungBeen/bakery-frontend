import React from 'react';
import styled from 'styled-components';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { MdOutlineClose } from 'react-icons/md';

interface LocationSettingModalPorps {
  onClose: () => void;
  onComplete: (address: Address) => void;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  width: 350px;
  height: 600px;
  background-color: #ececec;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 10px;
  border-radius: 10px;
  button {
    font-size: 1.3rem;
    position: relative;
    border: none;
    padding: 10px;
    float: right;
    cursor: pointer;
  }
  .daum-post-code {
    width: 100% !important;
    height: 90% !important;
  }
`;

const LocationSettingModal: React.FC<LocationSettingModalPorps> = ({
  onClose,
  onComplete,
}) => {
  return (
    <Container>
      <Modal>
        <button onClick={onClose}>
          <MdOutlineClose />
        </button>
        <DaumPostcode
          className="daum-post-code"
          onComplete={onComplete}
          focusInput
        />
      </Modal>
    </Container>
  );
};

export default LocationSettingModal;
