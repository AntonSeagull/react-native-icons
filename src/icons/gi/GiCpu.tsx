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

export const GiCpu = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M151 22v32h18V22zm48 0v32h18V22zm48 0v32h18V22zm48 0v32h18V22zm48 0v32h18V22zM131.7 73 73 131.7v248.6l58.7 58.7h248.6l58.7-58.7V131.7L380.3 73zm60.3 46h128v18H192zM22 151v18h32v-18zm436 0v18h32v-18zm-339 32h274v146H119zm-97 16v18h32v-18zm436 0v18h32v-18zm-321 2v110h238V201zM22 247v18h32v-18zm436 0v18h32v-18zM22 295v18h32v-18zm436 0v18h32v-18zM22 343v18h32v-18zm436 0v18h32v-18zm-266 32h128v18H192zm-41 83v32h18v-32zm48 0v32h18v-32zm48 0v32h18v-32zm48 0v32h18v-32zm48 0v32h18v-32z" />
      </G>
    </Svg>
  );
};