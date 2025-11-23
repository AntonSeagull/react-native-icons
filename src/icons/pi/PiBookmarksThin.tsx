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

export const PiBookmarksThin = (props: IconProps) => {
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
        <Path d="M192 28H96a12 12 0 0 0-12 12v20H64a12 12 0 0 0-12 12v152a4 4 0 0 0 6.33 3.25L112 188.92l53.69 38.33a3.94 3.94 0 0 0 2.31.75 4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 172 224v-47.08l25.68 18.33a3.94 3.94 0 0 0 2.32.75 4.1 4.1 0 0 0 1.83-.44A4 4 0 0 0 204 192V40a12 12 0 0 0-12-12m-28 188.23-49.68-35.48a4 4 0 0 0-4.65 0L60 216.23V72a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Zm32-32-24-17.14V72a12 12 0 0 0-12-12H92V40a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};