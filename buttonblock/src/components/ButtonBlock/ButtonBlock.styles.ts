import styled from 'styled-components';
import { colors } from '../../styles.ts';  



export const ButtonContainer = styled.div<{ isActive: boolean, size: string, variant: string }>`
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 16px;
  margin: 16px;
  padding: 16px 24px;
  border-radius:16px;
  background-color: ${(props) => {
    if (props.variant === 'main_reverse') return colors.ServiceColor05;
    return colors.SystemWhite;
  }};
  
  ${(props) => {
    switch (props.variant) {
      case 'main':
        return `color: ${colors.ServiceColor05};`;
      case 'sub':
        return `color: ${colors.SystemBlack};`;
      case 'danger':
        return `color: ${colors.ErrorColor03};`;
      case 'main_reverse':
        return `color: ${colors.SystemWhite};`;
      default:
        return `color: ${colors.SystemBlack};`;
    }
  }}
  cursor: ${(props) => (props.isActive ? 'pointer' : 'not-allowed')};
  opacity: ${(props) => (props.isActive ? 1 : 0.6)};
  box-shadow: 0px 0px 5px rgba(0,0,0,0.25);
`;

export const Icon = styled.span<{ position: string, color: string }>`
  margin: ${(props) => (props.position === 'left' ? '0 16px 0 0' : '0 0 0 16px')};
  color: ${(props) => {
    switch (props.color) {
      case 'active':
        return colors.ServiceColor05;
      case 'sub':
        return colors.ErrorColor03;
      default:
        return colors.SystemBlack;
    }
  }};
  display: ${(props) => (props.position === 'none' ? 'none' : 'inline-block')};
`;

export const ButtonLabel = styled.span`
  display: inline-block;
  font-size: inherit;
  font-weight: 500;
`;

