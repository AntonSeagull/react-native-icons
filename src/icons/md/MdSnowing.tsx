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

export const MdSnowing = (props: IconProps) => {
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
        <Path d="M6 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M4.75 6a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m12 8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-9 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0" />
      </G>
    </Svg>
  );
};