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

export const LiaSyncAltSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 4c-5.113 0-9.383 3.16-11.125 7.625l1.844.75C8.176 8.641 11.71 6 16 6c3.242 0 6.133 1.59 7.938 4H20v2h7V5h-2v3.094A11.94 11.94 0 0 0 16 4m9.281 15.625C23.824 23.359 20.29 26 16 26c-3.277 0-6.156-1.613-7.969-4H12v-2H5v7h2v-3.094C9.188 26.386 12.395 28 16 28c5.113 0 9.383-3.16 11.125-7.625Z" />
      </G>
    </Svg>
  );
};