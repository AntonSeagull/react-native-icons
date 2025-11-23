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

export const PiNumberSixThin = (props: IconProps) => {
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
        <Path d="M128 108a51.66 51.66 0 0 0-24.74 6.27L139.49 50a4 4 0 0 0-7-3.92L83 134.05A52 52 0 1 0 128 108m0 96a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44" />
      </G>
    </Svg>
  );
};