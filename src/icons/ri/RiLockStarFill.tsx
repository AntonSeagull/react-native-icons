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

export const RiLockStarFill = (props: IconProps) => {
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
        <Path d="M12 1a6 6 0 0 0-6 6v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9.044A6 6 0 0 1 21 14.044V9a1 1 0 0 0-1-1h-2V7a6 6 0 0 0-6-6m4 7H8V7a4 4 0 1 1 8 0zm5.145 15.14-.505-2.945 2.14-2.086-2.957-.43L18.5 15l-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L18.5 21.75z" />
      </G>
    </Svg>
  );
};