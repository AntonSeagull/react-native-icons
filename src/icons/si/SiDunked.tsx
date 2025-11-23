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

export const SiDunked = (props: IconProps) => {
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
        <Path d="M13.799 0v19.86A4.2 4.2 0 0 0 18 24h4.2V4.141A4.2 4.2 0 0 0 18 0zm-7.5 15.001a4.5 4.5 0 0 0-4.5 4.391v.222a4.5 4.5 0 0 0 9 0V19.4A4.5 4.5 0 0 0 6.298 15z" />
      </G>
    </Svg>
  );
};