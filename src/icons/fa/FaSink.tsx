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

export const FaSink = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M32 416a96 96 0 0 0 96 96h256a96 96 0 0 0 96-96v-32H32Zm464-128h-96v-32h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-80a32 32 0 0 0-32 32v48h-64V96a32 32 0 0 1 64 0v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V96A96.16 96.16 0 0 0 300.87 1.86C255.29 10.71 224 53.36 224 99.79V288h-64v-48a32 32 0 0 0-32-32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h64v32H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};