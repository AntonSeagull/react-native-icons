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

export const SiVeed = (props: IconProps) => {
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
        <Path d="M23.985 3.448 17.514 19.32a2.41 2.41 0 0 1-2.235 1.502h-6.54a2.41 2.41 0 0 1-2.234-1.5L.015 3.447a.196.196 0 0 1 .181-.27h6.55a.39.39 0 0 1 .368.254l4.905 13.083 4.866-13.082a.39.39 0 0 1 .367-.255h6.552c.139 0 .234.141.181.27z" />
      </G>
    </Svg>
  );
};