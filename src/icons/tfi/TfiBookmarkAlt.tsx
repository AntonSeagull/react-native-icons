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

export const TfiBookmarkAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.027 10.074V0H3.973v10.077l3.021-2.053zM4.973 8.188V1h4.055v7.191L6.991 6.815zM16 1.007V16H1V1.007h1.974v1H2V15h13V2.007h-4.005v-1z" />
      </G>
    </Svg>
  );
};