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

export const FaIgloo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 576 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 288, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M320 33.9c-10.5-1.2-21.2-1.9-32-1.9-99.8 0-187.8 50.8-239.4 128H320zM96 192H30.3C11.1 230.6 0 274 0 320h96zM352 39.4V160h175.4C487.2 99.9 424.8 55.9 352 39.4M480 320h96c0-46-11.1-89.4-30.3-128H480zm-64 64v96h128c17.7 0 32-14.3 32-32v-96H411.5c2.6 10.3 4.5 20.9 4.5 32m32-192H128v128h49.8c22.2-38.1 63-64 110.2-64s88 25.9 110.2 64H448zM0 448c0 17.7 14.3 32 32 32h128v-96c0-11.1 1.9-21.7 4.5-32H0zm288-160c-53 0-96 43-96 96v96h192v-96c0-53-43-96-96-96" />
      </G>
    </Svg>
  );
};