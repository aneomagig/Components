import { HTMLAttributes } from 'react';

export type IconProps = {
  label: string;
  position: 'right' | 'left' | 'none';
  color: 'default' | 'active' | 'sub';
};

export type ButtonBlockProps = {
  size: 'small' | 'normal' | 'large';
  is_active: boolean;
  icon: IconProps;
  variant: 'main' | 'sub' | 'danger' | 'main_reverse';
} & HTMLAttributes<HTMLDivElement>;
