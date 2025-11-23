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

export const RiTokenSwapLine = (props: IconProps) => {
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
        <Path d="M9 12.5 6.5 15 9 17.5l2.5-2.5zm6-10a6.5 6.5 0 0 0-6.482 6.018 6.5 6.5 0 1 0 6.964 6.964A6.5 6.5 0 0 0 15 2.5m.323 10.989a6.51 6.51 0 0 0-4.812-4.812 4.5 4.5 0 1 1 4.812 4.812M13.5 15a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M3 7a4 4 0 0 1 4-4h1.5v2H7a2 2 0 0 0-2 2v1.5H3zm16 10v-1.5h2V17a4 4 0 0 1-4 4h-1.5v-2H17a2 2 0 0 0 2-2" />
      </G>
    </Svg>
  );
};