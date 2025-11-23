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

export const ImowDownLeft2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.293 2.293 4 10.586V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1v.001h6a1 1 0 0 0 0-2H5.414l8.293-8.293a.997.997 0 0 0 0-1.414 1 1 0 0 0-1.414 0z" />
      </G>
    </Svg>
  );
};