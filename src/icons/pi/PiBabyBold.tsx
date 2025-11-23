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

export const PiBabyBold = (props: IconProps) => {
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
        <Path d="M92 144a16 16 0 1 1 16-16 16 16 0 0 1-16 16m72-32a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-14.4 49.85a41 41 0 0 1-43.2 0 12 12 0 1 0-12.8 20.3 65 65 0 0 0 68.8 0 12 12 0 1 0-12.8-20.3M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84.08 84.08 0 0 0-82-83.95c-9.46 14.2-10 27.28-10 28a8 8 0 0 0 16-.05 12 12 0 0 1 24 0 32 32 0 0 1-64 0c0-.63.1-10.48 5-23.52A84 84 0 1 0 212 128" />
      </G>
    </Svg>
  );
};