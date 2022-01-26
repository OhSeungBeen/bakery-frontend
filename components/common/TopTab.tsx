import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Address } from 'react-daum-postcode';
import AddressSettingModal from '../home/addressSettingModal';
import ToggleButton from './toggleButton';

interface TopTabProps {
  onChange: (address: string) => void;
}
const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  max-width: 767px;
  width: 100%;
  height: 80px;
  top: 0;
  padding: 10px 20px;
  z-index: 999;
  background-color: #9b6a3e;
  box-shadow: 0px 4px 4px rgba(19, 13, 8, 0.05);
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    left: 0;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  .address {
    color: #f9f3ed;
    font-weight: 600;
    font-size: 20px;
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
    width: 28px;
    height: 28px;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  .state {
    font-size: 14px;
    color: #f9f3ed;
  }
`;

const TopTab: React.FC<TopTabProps> = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [state, setState] = useState(true);

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

  const onToggle = () => {
    setState((prev) => !prev);
  };

  return (
    <TopWrapper>
      <Left>
        <div className="address">
          {address ? address : '주소를 설정해주세요'}
        </div>
        <button onClick={(e) => onOpen()}>
          <MdKeyboardArrowDown />
        </button>
      </Left>
      <Right>
        <div className="state">{state ? '영업중' : null}</div>
        <ToggleButton active={state} onToggle={onToggle} />
      </Right>
      {open && (
        <AddressSettingModal onClose={onClose} onComplete={onComplete} />
      )}
    </TopWrapper>
  );
};

export default TopTab;
