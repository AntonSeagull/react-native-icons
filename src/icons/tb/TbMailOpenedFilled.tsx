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

export const TbMailOpenedFilled = (props: IconProps) => {
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
        <Path d="m14.872 14.287 6.522 6.52a3 3 0 0 1-2.218 1.188L19 22H5a3 3 0 0 1-2.394-1.191l6.521-6.522 2.318 1.545.116.066a1 1 0 0 0 .878 0l.116-.066zM2 9.535l5.429 3.62L2 18.585zM22 9.535v9.05l-5.43-5.43zM12.44 2.102l.115.066 8.444 5.629-8.999 6-9-6 8.445-5.63a1 1 0 0 1 .994-.065z" />
      </G>
    </Svg>
  );
};