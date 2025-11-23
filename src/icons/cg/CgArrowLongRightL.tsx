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

export const CgArrowLongRightL = (props: IconProps) => {
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
        <Path fill="currentColor" d="m18.916 7.757 4.25 4.236-4.236 4.25-1.416-1.412 1.819-1.825-16.5.022v2.002h-2v-6h2v1.999l16.51-.023-1.838-1.832z" />
      </G>
    </Svg>
  );
};