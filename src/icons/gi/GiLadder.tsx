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

export const GiLadder = (props: IconProps) => {
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
        <Path d="M121 17v30h270V17zm16 48v46h30V65zm208 0v46h30V65zm-224 64v30h270v-30zm16 48v46h30v-46zm208 0v46h30v-46zm-224 64v30h270v-30zm16 48v46h30v-46zm208 0v46h30v-46zm-224 64v30h270v-30zm16 48v46h30v-46zm208 0v46h30v-46zm-224 64v30h270v-30z" />
      </G>
    </Svg>
  );
};