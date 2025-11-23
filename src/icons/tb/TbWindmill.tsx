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

export const TbWindmill = (props: IconProps) => {
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
        <Path d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3zM12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5zM12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21zM12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12z" />
      </G>
    </Svg>
  );
};