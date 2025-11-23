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

export const PiProhibitFill = (props: IconProps) => {
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
        <Path d="M200 128a71.7 71.7 0 0 1-15.78 44.91L83.09 71.78A71.95 71.95 0 0 1 200 128m-144 0a71.95 71.95 0 0 0 116.91 56.22L71.78 83.09A71.7 71.7 0 0 0 56 128m180 0A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-20 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88" />
      </G>
    </Svg>
  );
};