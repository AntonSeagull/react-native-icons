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

export const GiAbstract098 = (props: IconProps) => {
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
        <Path d="M115 21v94H21v94h94v94H21v94h94v94h94v-94h94v94h94v-94h94v-94h-94v-94h94v-94h-94V21h-94v94h-94V21zm141 148.931c47.548 0 86.069 38.521 86.069 86.069s-38.52 86.069-86.069 86.069-86.069-38.521-86.069-86.069 38.521-86.069 86.07-86.069m0 29.963c-30.978 0-56.106 25.128-56.106 56.106s25.128 56.106 56.106 56.106 56.106-25.128 56.106-56.106-25.128-56.106-56.106-56.106" />
      </G>
    </Svg>
  );
};