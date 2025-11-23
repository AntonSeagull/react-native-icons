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

export const PiCellSignalSlash = (props: IconProps) => {
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
        <Path d="M88 152v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m-48 32a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8m173.92 26.62-160-176a8 8 0 1 0-11.84 10.76L112 122.29V200a8 8 0 0 0 16 0v-60.11l24 26.4V200a8 8 0 0 0 16 0v-16.11l34.08 37.49a8 8 0 1 0 11.84-10.76m-53.92-87a8 8 0 0 0 8-8V72a8 8 0 0 0-16 0v43.63a8 8 0 0 0 8 8Zm40 44a8 8 0 0 0 8-8V32a8 8 0 0 0-16 0v127.63a8 8 0 0 0 8 8Z" />
      </G>
    </Svg>
  );
};