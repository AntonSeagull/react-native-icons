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

export const PiCouchLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M238 107.37V72a14 14 0 0 0-14-14H32a14 14 0 0 0-14 14v35.37A14 14 0 0 0 10 120v48a14 14 0 0 0 14 14h10v18a6 6 0 0 0 12 0v-18h164v18a6 6 0 0 0 12 0v-18h10a14 14 0 0 0 14-14v-48a14 14 0 0 0-8-12.63M226 72v34h-10a14 14 0 0 0-14 14v18h-68V70h90a2 2 0 0 1 2 2M32 70h90v68H54v-18a14 14 0 0 0-14-14H30V72a2 2 0 0 1 2-2m202 98a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2v-48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v24a6 6 0 0 0 6 6h160a6 6 0 0 0 6-6v-24a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};