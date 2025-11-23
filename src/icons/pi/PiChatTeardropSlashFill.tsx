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

export const PiChatTeardropSlashFill = (props: IconProps) => {
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
        <Path d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-13.57-14.92A99.4 99.4 0 0 1 132 224H48a16 16 0 0 1-16-16v-84a99.54 99.54 0 0 1 23.29-64.08L42.08 45.38a8 8 0 0 1 .72-11.46 8.22 8.22 0 0 1 11.34.95Zm-5.57-29.91a4 4 0 0 0 6.24-.4A100 100 0 0 0 83.78 36.42a4 4 0 0 0-1 6.18Z" />
      </G>
    </Svg>
  );
};