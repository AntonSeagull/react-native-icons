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

export const PiArrowDownRightThin = (props: IconProps) => {
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
        <Path d="M196 88v104a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h94.34L61.17 66.83a4 4 0 0 1 5.66-5.66L188 182.34V88a4 4 0 0 1 8 0" />
      </G>
    </Svg>
  );
};