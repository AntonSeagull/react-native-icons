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

export const GiTrashCan = (props: IconProps) => {
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
        <Path d="M199 103v50h-78v30h270v-30h-78v-50zm18 18h78v32h-78zm-79.002 80 30.106 286h175.794l30.104-286zm62.338 13.38.64 8.98 16 224 .643 8.976-17.956 1.283-.64-8.98-16-224-.643-8.976zm111.328 0 17.955 1.284-.643 8.977-16 224-.64 8.98-17.956-1.284.643-8.977 16-224 .64-8.98zM247 215h18v242h-18z" />
      </G>
    </Svg>
  );
};