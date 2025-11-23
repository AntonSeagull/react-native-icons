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

export const PiMedalMilitaryThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M207 44H49a13 13 0 0 0-13 13v49.21A13 13 0 0 0 43.62 118l70.72 32.14a44 44 0 1 0 27.32 0L212.38 118a13 13 0 0 0 7.62-11.79V57a13 13 0 0 0-13-13m-43 8v79.24l-36 16.37-36-16.37V52ZM44 106.21V57a5 5 0 0 1 5-5h35v75.61l-37.07-16.85a5 5 0 0 1-2.93-4.55M164 192a36 36 0 1 1-36-36 36 36 0 0 1 36 36m48-85.79a5 5 0 0 1-2.93 4.55L172 127.61V52h35a5 5 0 0 1 5 5Z" />
      </G>
    </Svg>
  );
};