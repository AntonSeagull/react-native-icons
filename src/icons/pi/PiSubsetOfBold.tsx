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

export const PiSubsetOfBold = (props: IconProps) => {
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
        <Path d="M212 208a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h152a12 12 0 0 1 12 12m-12-52h-96a44 44 0 0 1 0-88h96a12 12 0 0 0 0-24h-96a68 68 0 0 0 0 136h96a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};