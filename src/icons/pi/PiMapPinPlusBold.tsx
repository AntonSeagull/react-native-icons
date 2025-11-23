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

export const PiMapPinPlusBold = (props: IconProps) => {
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
        <Path d="M172 104a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1 0-24h20V72a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m48 0c0 32.38-14.85 66.57-42.94 98.87a259 259 0 0 1-42.18 39 12 12 0 0 1-13.76 0C117.64 239.4 36 181.36 36 104a92 92 0 0 1 184 0m-24 0a68 68 0 0 0-136 0c0 33.31 20 63.37 36.7 82.71a249.4 249.4 0 0 0 31.3 30.18 249.4 249.4 0 0 0 31.3-30.18C176 167.37 196 137.31 196 104" />
      </G>
    </Svg>
  );
};