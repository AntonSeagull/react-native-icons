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

export const PiSupersetProperOf = (props: IconProps) => {
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
        <Path d="M224 128a88.1 88.1 0 0 1-88 88H64a8 8 0 0 1 0-16h72a72 72 0 0 0 0-144H64a8 8 0 0 1 0-16h72a88.1 88.1 0 0 1 88 88" />
      </G>
    </Svg>
  );
};