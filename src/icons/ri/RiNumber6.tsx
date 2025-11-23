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

export const RiNumber6 = (props: IconProps) => {
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
        <Path d="m14.886 2-4.438 7.686A6.5 6.5 0 1 1 6.4 12.7L12.576 2zM12 11.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" />
      </G>
    </Svg>
  );
};