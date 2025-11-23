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

export const PiArrowDownLeft = (props: IconProps) => {
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
        <Path d="M197.66 69.66 83.31 184H168a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v84.69L186.34 58.34a8 8 0 0 1 11.32 11.32" />
      </G>
    </Svg>
  );
};