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

export const TbHomeLink = (props: IconProps) => {
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
        <Path d="M20.085 11.085 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
        <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143M20 21a1 1 0 1 0 2 0 1 1 0 1 0-2 0M20 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M15 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="m21 16-5 3 5 2" />
      </G>
    </Svg>
  );
};