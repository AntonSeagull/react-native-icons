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

export const TbTrafficLights = (props: IconProps) => {
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
        <Path d="M7 7a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5z" />
        <Path d="M11 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  );
};