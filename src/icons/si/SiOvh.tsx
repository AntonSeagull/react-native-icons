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

export const SiOvh = (props: IconProps) => {
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
        <Path d="m19.881 10.095 2.563-4.45A11.93 11.93 0 0 1 24 11.555c0 2.88-1.017 5.523-2.71 7.594h-6.62l2.04-3.541h-2.696l3.176-5.513zm-2.32-5.243L9.333 19.14l.003.009H2.709A11.95 11.95 0 0 1 0 11.555c0-2.152.57-4.17 1.561-5.918L5.855 13.1 10.6 4.852z" />
      </G>
    </Svg>
  );
};