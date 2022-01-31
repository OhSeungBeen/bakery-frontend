import React from 'react';
import styled from 'styled-components';

interface ToggleButtonProps {
  active: boolean;
  onToggle: () => void;
}

const Container = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: 52px;
  height: 24px;
  margin-left: 12px;
  background: ${(props) => (props.active ? '#744f2f' : '#F9F3ED')};
  border-radius: 40px;
  cursor: pointer;
  .circle {
    width: 20px;
    height: 20px;
    margin: 0 3px;
    background: #ffd43b;
    border-radius: 50%;
    box-shadow: -2px 0px 4px rgba(78, 53, 31, 0.1);
    transition: all 0.3s ease-in;
    transform: ${(props) => (props.active ? 'translateX(26px)' : 'none')};
  }
`;

const ToggleButton: React.FC<ToggleButtonProps> = ({ active, onToggle }) => {
  return (
    <Container active={active} onClick={onToggle}>
      <div className="circle"></div>
    </Container>
  );
};

export default ToggleButton;
