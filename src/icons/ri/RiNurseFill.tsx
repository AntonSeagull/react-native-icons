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

export const RiNurseFill = (props: IconProps) => {
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
        <Path d="M14.957 15.564A8.01 8.01 0 0 1 19.94 22H4.063a8.01 8.01 0 0 1 4.981-6.436L12.001 20zM18.001 2v6A6 6 0 0 1 6 8V2zm-2 6H8a4 4 0 0 0 8 0" />
      </G>
    </Svg>
  );
};