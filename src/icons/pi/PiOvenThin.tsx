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

export const PiOvenThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM76 76a8 8 0 1 1 8 8 8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8m20 32H72a4 4 0 0 0-4 4v72a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4m-4 72H76v-64h104Z" />
      </G>
    </Svg>
  );
};