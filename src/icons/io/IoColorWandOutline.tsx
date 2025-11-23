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

export const IoColorWandOutline = (props: IconProps) => {
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
        <Rect width={63.03} height={378.2} x={280.48} y={122.9} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} rx={31.52} transform="rotate(-45 312.002 311.994)" />
        <Path d="M178.38 178.38a31.64 31.64 0 0 0 0 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 0 0-44.75 0" />
        <Path stroke="#000" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={32} d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94" />
      </G>
    </Svg>
  );
};