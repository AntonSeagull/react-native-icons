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

export const RiExpandUpDownLine = (props: IconProps) => {
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
        <Path d="M18.207 9.043 12 2.836 5.793 9.043l1.414 1.414L12 5.664l4.793 4.793zM5.793 14.957 12 21.164l6.207-6.207-1.414-1.414L12 18.336l-4.793-4.793z" />
      </G>
    </Svg>
  );
};