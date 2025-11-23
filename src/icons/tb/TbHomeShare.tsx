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

export const TbHomeShare = (props: IconProps) => {
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
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2c.247 0 .484.045.702.127" />
        <Path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5M16 22l5-5M21 21.5V17h-4.5" />
      </G>
    </Svg>
  );
};