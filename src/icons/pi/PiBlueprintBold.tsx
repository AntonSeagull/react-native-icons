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

export const PiBlueprintBold = (props: IconProps) => {
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
        <Path d="M232 48H76v-8a12 12 0 0 0-12-12H48a36 36 0 0 0-36 36v112a36 36 0 0 0 36 36h184a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12M36 64a12 12 0 0 1 12-12h4v88h-4a35.6 35.6 0 0 0-12 2.06Zm184 124H48a12 12 0 0 1 0-24h16a12 12 0 0 0 12-12V72h144Zm-116-52a12 12 0 0 0 0 24h12v4a12 12 0 0 0 24 0v-4h16v4a12 12 0 0 0 24 0v-4h12a12 12 0 0 0 0-24h-12v-12h12a12 12 0 0 0 0-24h-12v-4a12 12 0 0 0-24 0v4h-16v-4a12 12 0 0 0-24 0v4h-12a12 12 0 0 0 0 24h12v12Zm36-12h16v12h-16Z" />
      </G>
    </Svg>
  );
};