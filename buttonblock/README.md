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


/**
 * 일반적인 버튼을 표시합니다.
 * @param size 폰트 사이즈와 같은 요소들의 크기가 조절되었을 때 크기를 맞추기 위한 요소입니다.
 * [size=small] 작은 사이즈의 버튼입니다.
 * [size=normal] 일반 사이즈의 버튼입니다.
 * [size=large] 큰 사이즈의 버튼입니다.
 * 
 * @param icon 버튼 안에 들어갈 아이콘과 아이콘의 위치에 대한 정보입니다.
 * 
 * @param IconProps 아이콘의 종류에 대한 정보입니다.
 * [position=right] 아이콘이 버튼이름의 오른쪽에 표시됩니다.
 * [position=left] 아이콘이 버튼이름의 왼쪽에 표시됩니다.
 * [position=none] 아이콘이 표시되지 않습니다.
 * [color=default] 아이콘이 검정색으로 표시됩니다.
 * [color=active] 아이콘이 초록색으로 표시됩니다.
 * [color=sub] 아이콘이 회색으로 표시됩니다.
 * 
 * @param variant 버튼의 스타일에 대한 정보입니다.
 * [style=main] 배경: white, 버튼이름: ServiceColor05
 * [style=sub] 배경: white, 버튼이름: black
 * [style=danger] 배경: white, 버튼이름: ErrorColor03
 * [style=main_reverse] 배경: ServiceColor05, 버튼이름: white
 

 
