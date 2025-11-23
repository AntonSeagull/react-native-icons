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

export const PiCow = (props: IconProps) => {
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
        <Path d="M104 192a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8m72-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m-76-48a12 12 0 1 0-12-12 12 12 0 0 0 12 12m56 0a12 12 0 1 0-12-12 12 12 0 0 0 12 12m88.39-13.88A16 16 0 0 1 232 128h-32v32a40 40 0 0 1-24 72H80a40 40 0 0 1-24-72v-32H24a16 16 0 0 1-15.69-19 56.13 56.13 0 0 1 54.91-45h1.64A55.83 55.83 0 0 1 48 24a8 8 0 0 1 16 0 40 40 0 0 0 40 40h48a40 40 0 0 0 40-40 8 8 0 0 1 16 0 55.83 55.83 0 0 1-16.86 40h1.64a56.13 56.13 0 0 1 54.91 45 15.82 15.82 0 0 1-3.3 13.12M72 152.8a40.6 40.6 0 0 1 8-.8h96a40.6 40.6 0 0 1 8 .8V104a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24ZM56 112v-8a39.8 39.8 0 0 1 8-24h-.8A40.09 40.09 0 0 0 24 112Zm144 80a24 24 0 0 0-24-24H80a24 24 0 0 0 0 48h96a24 24 0 0 0 24-24m32-80a40.08 40.08 0 0 0-39.2-32h-.8a39.8 39.8 0 0 1 8 24v8Z" />
      </G>
    </Svg>
  );
};