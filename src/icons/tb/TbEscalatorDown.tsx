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

export const TbEscalatorDown = (props: IconProps) => {
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
        <Path d="M4.5 7h2.733a2 2 0 0 1 1.337.513L18 16h1.5a2.5 2.5 0 1 1 0 5h-2.733a2 2 0 0 1-1.337-.513L6 12H4.5a2.5 2.5 0 1 1 0-5M18 3v7M15 7l3 3 3-3" />
      </G>
    </Svg>
  );
};