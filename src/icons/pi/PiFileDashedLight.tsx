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

export const PiFileDashedLight = (props: IconProps) => {
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
        <Path d="M78 224a6 6 0 0 1-6 6H56a14 14 0 0 1-14-14v-32a6 6 0 0 1 12 0v32a2 2 0 0 0 2 2h16a6 6 0 0 1 6 6M214 88v48a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38h-26a6 6 0 0 1 0-12h32a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88m-56-6h35.51L158 46.49ZM80 26H56a14 14 0 0 0-14 14v24a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h24a6 6 0 0 0 0-12m128 144a6 6 0 0 0-6 6v40a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-40a6 6 0 0 0-6-6M48 150a6 6 0 0 0 6-6v-40a6 6 0 0 0-12 0v40a6 6 0 0 0 6 6m104 68h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};