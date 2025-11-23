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

export const PiAndroidLogoDuotone = (props: IconProps) => {
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
        <Path d="M232 160v24a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-22.87C24 103.65 70.15 56.2 127.63 56A104 104 0 0 1 232 160" opacity={0.2} />
        <Path d="M176 148a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-84-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m148 24v24a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-22.87a113.38 113.38 0 0 1 35.4-82.41L26.34 53.66a8 8 0 0 1 11.32-11.32L63.82 68.5a111.4 111.4 0 0 1 128.55-.18l26-26a8 8 0 0 1 11.32 11.32L204.82 78.5c.75.71 1.5 1.43 2.24 2.17A111.25 111.25 0 0 1 240 160m-16 0a96 96 0 0 0-96-96h-.34C74.91 64.18 32 107.75 32 161.13V184h192Z" />
      </G>
    </Svg>
  );
};