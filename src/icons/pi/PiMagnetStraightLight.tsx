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

export const PiMagnetStraightLight = (props: IconProps) => {
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
        <Path d="M200 42h-40a14 14 0 0 0-14 14v88a18 18 0 0 1-36 0V56a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v88a86 86 0 0 0 86 86h.65c47.06-.35 85.35-39.38 85.35-87V56a14 14 0 0 0-14-14m-40 12h40a2 2 0 0 1 2 2v34h-44V56a2 2 0 0 1 2-2M56 54h40a2 2 0 0 1 2 2v34H54V56a2 2 0 0 1 2-2m72.56 164H128a74 74 0 0 1-74-74v-42h44v42a30 30 0 0 0 60 0v-42h44v41c0 41.05-32.94 74.7-73.44 75" />
      </G>
    </Svg>
  );
};