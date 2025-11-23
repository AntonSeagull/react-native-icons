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

export const Imphy = (props: IconProps) => {
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
        <Path d="M13 3V1H3v2H0v2a3 3 0 0 0 3.9 2.862A5 5 0 0 0 7 9.899v3.1H6a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2H9v-3.1a5 5 0 0 0 3.1-2.037A3 3 0 0 0 16 5V3zM3 6.813A1.815 1.815 0 0 1 1.187 5V4H3v1c0 .628.116 1.229.327 1.782q-.16.03-.327.03zM14.813 5a1.815 1.815 0 0 1-2.14 1.783A5 5 0 0 0 13 5.001v-1h1.813z" />
      </G>
    </Svg>
  );
};