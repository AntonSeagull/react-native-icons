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

export const PiCalendarSlashFill = (props: IconProps) => {
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
        <Path d="M224 48v139.57a4 4 0 0 1-7 2.7L116.8 80H208V48h-24v8a8 8 0 0 1-8.52 8 8.18 8.18 0 0 1-7.48-8.27V48H87.71l-8.46-9.31a4 4 0 0 1 3-6.69H168v-8a8 8 0 0 1 8.52-8 8.18 8.18 0 0 1 7.48 8.27V32h24a16 16 0 0 1 16 16m-10.08 162.62A8 8 0 0 1 208 224H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16 8 8 0 0 1 5.93 2.62ZM73.55 80 48 51.89V80Z" />
      </G>
    </Svg>
  );
};