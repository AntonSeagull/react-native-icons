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

export const TbMickeyFilled = (props: IconProps) => {
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
        <Path d="M18.501 2a4.5 4.5 0 0 1 .878 8.913 8 8 0 1 1-15.374 3.372L4 14l.005-.285a8 8 0 0 1 .615-2.803 4.5 4.5 0 0 1-3.187-6.348 4.5 4.5 0 0 1 3.596-2.539l.225-.018L5.535 2l.244.009a4.5 4.5 0 0 1 4.215 4.247 8 8 0 0 1 4.013 0A4.5 4.5 0 0 1 18.5 2z" />
      </G>
    </Svg>
  );
};