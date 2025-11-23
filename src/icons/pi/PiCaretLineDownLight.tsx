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

export const PiCaretLineDownLight = (props: IconProps) => {
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
        <Path d="M43.76 76.24a6 6 0 0 1 8.48-8.48L128 143.51l75.76-75.75a6 6 0 0 1 8.48 8.48l-80 80a6 6 0 0 1-8.48 0ZM208 186H48a6 6 0 0 0 0 12h160a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};