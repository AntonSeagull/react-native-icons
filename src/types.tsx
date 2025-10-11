import type { SvgProps } from 'react-native-svg';

export interface IconProps extends Omit<SvgProps, 'width' | 'height' | 'viewBox'> {
  size?: number;
  color?: string;
  rotate?: number;
}