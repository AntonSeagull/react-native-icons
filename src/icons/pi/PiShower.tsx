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

export const PiShower = (props: IconProps) => {
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
        <Path d="M64 236a12 12 0 1 1-12-12 12 12 0 0 1 12 12m20-44a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-64 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m32-32a12 12 0 1 0 12 12 12 12 0 0 0-12-12M256 40a8 8 0 0 1-8 8h-28.69l-27.85 27.86-21.66 126.79a16 16 0 0 1-27.09 8.66l-98-98a16 16 0 0 1 8.69-27.1l126.74-21.67 30.2-30.2A8 8 0 0 1 216 32h32a8 8 0 0 1 8 8m-81.79 41.79L56 102l98 98Z" />
      </G>
    </Svg>
  );
};