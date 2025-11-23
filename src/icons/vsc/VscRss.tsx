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

export const VscRss = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M5 13H3v-2c1.11 0 2 .89 2 2M3 3v1a9 9 0 0 1 9 9h1C13 7.48 8.52 3 3 3m0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6" clipRule="evenodd" />
      </G>
    </Svg>
  );
};