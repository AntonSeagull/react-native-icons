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

export const PiScribbleBold = (props: IconProps) => {
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
        <Path d="M208.5 192.49a10.6 10.6 0 0 0 0 15 12 12 0 0 1-17 17 34.62 34.62 0 0 1 0-49l9.37-9.37a10.63 10.63 0 0 0-15-15l-66.76 66.75a34.63 34.63 0 0 1-49-49l98.76-98.75a10.63 10.63 0 0 0-15-15l-66.76 66.74a34.63 34.63 0 0 1-49-49l41.4-41.35a12 12 0 1 1 17 17L55.1 89.86a10.63 10.63 0 0 0 15 15l66.76-66.75a34.63 34.63 0 1 1 49 49l-98.75 98.75a10.63 10.63 0 0 0 15 15l66.75-66.75a34.63 34.63 0 0 1 49 49Z" />
      </G>
    </Svg>
  );
};