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

export const PiArrowDownRightFill = (props: IconProps) => {
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
        <Path d="M200 88v104a8 8 0 0 1-8 8H88a8 8 0 0 1-5.66-13.66L128.69 140 58.34 69.66a8 8 0 0 1 11.32-11.32L140 128.69l46.34-46.35A8 8 0 0 1 200 88" />
      </G>
    </Svg>
  );
};