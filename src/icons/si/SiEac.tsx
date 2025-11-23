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

export const SiEac = (props: IconProps) => {
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
        <Path d="M2.667 24h2.667v-2.667H2.667v-8h2.667v-2.666H2.667v-8h2.667V0H0v24zm21.334-2.667h-2.668V2.667h2.668V0h-5.333v24h5.333zM13.334 0H8v24h2.667V13.335h2.667V24H16V0Zm0 10.667h-2.667v-8h2.667z" />
      </G>
    </Svg>
  );
};