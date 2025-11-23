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

export const VscPiano = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M1 2 0 3v6h1V3h2v5.5l.5.5h1l.5-.5V3h2v5.5l.5.5h1l.5-.5V3h2v5.5l.5.5h1l.5-.5V3h2v10h-3v-3h-1v3H8.5v-3h-1v3H5v-3H4v3H1V9H0v4l1 1h14l1-1V3l-1-1z" />
      </G>
    </Svg>
  );
};