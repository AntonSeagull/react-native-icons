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

export const PiClosedCaptioning = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H32V64h192zm-105.08-40.29a8 8 0 0 1-2.92 10.93 40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 10.92 2.92m80 0a8 8 0 0 1-2.92 10.93 40 40 0 1 1 0-69.28 8 8 0 1 1-8 13.85 24 24 0 1 0 0 41.58 8 8 0 0 1 10.92 2.92" />
      </G>
    </Svg>
  );
};