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

export const CgHome = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="m21 8.772-6.98-6.979a3 3 0 0 0-4.242 0L3 8.571v14.515h7v-6a2 2 0 1 1 4 0v6h7zm-9.808-5.565L5 9.4v11.686h3v-4a4 4 0 0 1 8 0v4h3V9.6l-6.393-6.394a1 1 0 0 0-1.415 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};