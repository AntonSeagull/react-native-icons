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

export const RiEditCircleFill = (props: IconProps) => {
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
        <Path d="M16.626 3.129 9.29 10.462 9.3 14.71l4.238-.008 7.331-7.33A9.96 9.96 0 0 1 22 11.996c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10c1.669 0 3.242.409 4.626 1.131m3.86-1.032 1.413 1.414-9.192 9.193-1.412.002-.002-1.416z" />
      </G>
    </Svg>
  );
};