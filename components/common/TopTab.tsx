import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Address } from 'react-daum-postcode';
import AddressSettingModal from '../home/addressSettingModal';

interface TopTabProps {
  onChange: (address: string) => void;
}
const TopWrapper = styled.div`
  max-width: 767px;
  width: 100%;
  position: fixed;
  background-color: #9b6a3e;
  top: 0;
  height: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  box-shadow: 0px 4px 4px rgba(19, 13, 8, 0.05);
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    left: 0;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  color: #f9f3ed;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -4%;
  h4 {
    margin-right: 10px;
  }
  button {
    background-color: transparent;
    border-color: transparent;
    color: #ffd43b;
    border: none;
    cursor: pointer;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;
const Right = styled.div``;

const TopTab: React.FC<TopTabProps> = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onComplete = (address: Address) => {
    setOpen(false);
    setAddress(address.address);
    onChange(address.address);
  };

  return (
    <TopWrapper>
      <Left>
        <h4>{address ? address : '주소를 설정해주세요'}</h4>
        <button onClick={(e) => onOpen()}>
          <MdKeyboardArrowDown />
        </button>
      </Left>
      <Right></Right>
      {open && (
        <AddressSettingModal onClose={onClose} onComplete={onComplete} />
      )}
    </TopWrapper>
  );
};

export default TopTab;
