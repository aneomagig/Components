import React from 'react';
import { ButtonContainer, Icon, ButtonLabel } from '../ButtonBlock/ButtonBlock.styles.ts';
import { ButtonBlockProps } from '../../types/ButtonBlock.types';

const ButtonBlock: React.FC<ButtonBlockProps> = ({ size, is_active, icon, variant, children }) => {
  return (
    <div>   
        <ButtonContainer isActive={is_active} size={size} variant={variant}>
            {icon.position === 'left' && <Icon position="left" color={icon.color}>{icon.label}</Icon>}
            <ButtonLabel>{children}</ButtonLabel>
            {icon.position === 'right' && <Icon position="right" color={icon.color}>{icon.label}</Icon>}
        </ButtonContainer>
    </div>
  );
};

export default ButtonBlock;
