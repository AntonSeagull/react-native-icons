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

export const TiMediaRecord = (props: IconProps) => {
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
        <Path d="M18 12a5.99 5.99 0 0 0-1.757-4.243A5.99 5.99 0 0 0 12 6a5.99 5.99 0 0 0-4.242 1.757A5.98 5.98 0 0 0 6 12c0 1.656.672 3.156 1.758 4.242S10.344 18 12 18a5.98 5.98 0 0 0 4.243-1.758A5.99 5.99 0 0 0 18 12" />
      </G>
    </Svg>
  );
};