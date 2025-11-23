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

export const MdWallpaper = (props: IconProps) => {
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
        <Path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2zm6 9-4 5h12l-3-4-2.03 2.71zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5M20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2m0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4z" />
      </G>
    </Svg>
  );
};