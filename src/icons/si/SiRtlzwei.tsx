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

export const SiRtlzwei = (props: IconProps) => {
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
        <Path d="M0 0v24h7.38v-3.69H3.692L3.69 3.69h9.229V0zm16.61 0v3.69h3.7v16.62h-9.238V24H24V0zm-.003 6.49-3.689.717v9.227l3.69-.715V6.49zm-5.535 1.076-3.69.715v9.229l3.69-.717z" />
      </G>
    </Svg>
  );
};