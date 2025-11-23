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

export const CgMinimizeAlt = (props: IconProps) => {
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
        <Path fill="currentColor" d="m20.074 2 1.414 1.414-5.85 5.85h2.544v2h-6v-6h2v2.627zM11.182 12.264v6h-2v-2.422L3.414 21.61 2 20.196l5.932-5.932h-2.75v-2z" />
      </G>
    </Svg>
  );
};