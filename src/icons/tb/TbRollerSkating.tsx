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

export const TbRollerSkating = (props: IconProps) => {
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
        <Path d="M5.905 5h3.418a1 1 0 0 1 .928.629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717.926A2.084 2.084 0 0 1 20 13.286V14a1 1 0 0 1-1 1H5.105a1 1 0 0 1-1-1.1l.8-8a1 1 0 0 1 1-.9" />
        <Path d="M6 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      </G>
    </Svg>
  );
};