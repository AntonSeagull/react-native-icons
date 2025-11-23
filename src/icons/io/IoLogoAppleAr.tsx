import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const IoLogoAppleAr = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M201.14 64 256 32l54.86 32" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M256 32v80" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M310.86 448 256 480l-54.86-32" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M256 480v-80" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M64 207.51V144l53.15-31.51" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="m64 144 67.29 40" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M448 304.49V368l-53.15 31.51" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="m448 368-67.29-40" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M117.15 400 64 368v-63.51" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="m64 368 66.64-40" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M394.85 112.49 448 144v63.51" />
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="m448 144-67.29 40M256 320v-64l54.86-32M256 256l-54.86-32" />
      </G>
    </Svg>
  );
};