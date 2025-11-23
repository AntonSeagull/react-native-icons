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

export const RiGeminiLine = (props: IconProps) => {
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
        <Path d="M11.124 1.09h1.751l.052.855a9.743 9.743 0 0 0 9.128 9.128l.854.052v1.75l-.854.052a9.743 9.743 0 0 0-9.128 9.128l-.052.855h-1.75l-.052-.855a9.743 9.743 0 0 0-9.128-9.128l-.854-.051v-1.751l.854-.052a9.743 9.743 0 0 0 9.128-9.128zM12 5.85A11.6 11.6 0 0 1 5.85 12 11.6 11.6 0 0 1 12 18.15 11.6 11.6 0 0 1 18.15 12 11.6 11.6 0 0 1 12 5.85" />
      </G>
    </Svg>
  );
};