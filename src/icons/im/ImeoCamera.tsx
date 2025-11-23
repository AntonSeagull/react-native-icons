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

export const ImeoCamera = (props: IconProps) => {
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
        <Path d="M6 4.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-6 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m12 5V8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1.5l4 2.5V7zM10 12H2V9h8z" />
      </G>
    </Svg>
  );
};