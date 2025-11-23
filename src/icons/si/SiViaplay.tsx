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

export const SiViaplay = (props: IconProps) => {
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
        <Path d="M1.277 6.638C.474 8.243 0 10.067 0 12s.474 3.757 1.277 5.362L12 12ZM12 0a11.97 11.97 0 0 0-7.769 2.845l12.547 6.748v4.814L4.231 21.155C6.31 22.942 9.046 24 12 24c6.638 0 12-5.362 12-12S18.638 0 12 0" />
      </G>
    </Svg>
  );
};