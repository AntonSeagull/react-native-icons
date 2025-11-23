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

export const PiEngineLight = (props: IconProps) => {
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
        <Path d="M240 106h-13.51l-35.91-35.9a13.9 13.9 0 0 0-9.89-4.1H138V38h26a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12h26v28H64a14 14 0 0 0-14 14v54H22v-26a6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-26h28v22.69a13.9 13.9 0 0 0 4.1 9.89l39.32 39.32a13.9 13.9 0 0 0 9.89 4.1h77.38a13.9 13.9 0 0 0 9.89-4.1l35.91-35.9H240a14 14 0 0 0 14-14v-48a14 14 0 0 0-14-14m2 62a2 2 0 0 1-2 2h-16a6 6 0 0 0-4.24 1.76l-37.66 37.66a2 2 0 0 1-1.41.58h-77.38a2 2 0 0 1-1.41-.58L62.58 170.1a2 2 0 0 1-.58-1.41V80a2 2 0 0 1 2-2h116.69a2 2 0 0 1 1.41.58l37.66 37.66A6 6 0 0 0 224 118h16a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};