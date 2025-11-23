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

export const PiHandFistLight = (props: IconProps) => {
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
        <Path d="M200 82h-18V64a30 30 0 0 0-54-18 30 30 0 0 0-54 18 30 30 0 0 0-48 24v40a102 102 0 0 0 204 0v-16a30 30 0 0 0-30-30m-48-36a18 18 0 0 1 18 18v18h-34a15 15 0 0 0-2 .16V64a18 18 0 0 1 18-18M86 64a18 18 0 0 1 36 0v40a18 18 0 0 1-36 0ZM38 88a18 18 0 0 1 36 0v16a18 18 0 0 1-36 0Zm180 40a90 90 0 0 1-180 0 30 30 0 0 0 42-6 30 30 0 0 0 45.12 3.3A30.18 30.18 0 0 0 140 139.51 45.92 45.92 0 0 0 122 176a6 6 0 0 0 12 0 34 34 0 0 1 34-34 6 6 0 0 0 0-12h-16a18 18 0 0 1-18-18V96a2 2 0 0 1 2-2h64a18 18 0 0 1 18 18Z" />
      </G>
    </Svg>
  );
};