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

export const PiCaretLineUpDuotone = (props: IconProps) => {
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
        <Path d="M208 192H48l80-80Z" opacity={0.2} />
        <Path d="M133.66 106.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 200h160a8 8 0 0 0 5.66-13.66ZM67.31 184 128 123.31 188.69 184ZM40 72a8 8 0 0 1 8-8h160a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8" />
      </G>
    </Svg>
  );
};