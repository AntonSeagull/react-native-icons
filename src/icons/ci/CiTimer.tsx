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

export const CiTimer = (props: IconProps) => {
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
        <Path d="M2.336 9.685a9.934 9.934 0 0 0 11.256 12.123A9.93 9.93 0 0 0 20.708 7.23 10.05 10.05 0 0 0 12 2.072a.507.507 0 0 0-.5.5v4.2a.5.5 0 0 0 1 0v-4.2l-.5.5a8.935 8.935 0 0 1 8.433 11.892 8.938 8.938 0 0 1-13.965 4.063A9.04 9.04 0 0 1 3.3 9.951c.142-.627-.822-.9-.964-.266" />
        <Path d="M7.4 8.117a.5.5 0 0 1 .707-.707l4.243 4.242a.5.5 0 0 1-.707.707Z" />
      </G>
    </Svg>
  );
};