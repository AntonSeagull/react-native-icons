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

export const SiNordvpn = (props: IconProps) => {
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
        <Path d="M2.284 21.541A12 12 0 0 1 0 14.483C0 7.842 5.373 2.46 12 2.46c6.628 0 12 5.383 12 12.024a12 12 0 0 1-2.284 7.058l-5.763-9.378-.557.942.565 2.619L12 8.934l-2.45 4.145.57 2.645-2.076-3.556z" />
      </G>
    </Svg>
  );
};