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

export const PiFileDashedBold = (props: IconProps) => {
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
        <Path d="M84 224a12 12 0 0 1-12 12H56a20 20 0 0 1-20-20v-32a12 12 0 0 1 24 0v28h12a12 12 0 0 1 12 12M220 88v48a12 12 0 0 1-24 0v-32h-48a12 12 0 0 1-12-12V44h-16a12 12 0 0 1 0-24h32a12 12 0 0 1 8.49 3.51l56 56A12 12 0 0 1 220 88m-60-8h23l-23-23ZM80 20H56a20 20 0 0 0-20 20v24a12 12 0 0 0 24 0V44h20a12 12 0 0 0 0-24m128 144a12 12 0 0 0-12 12v36h-4a12 12 0 0 0 0 24h8a20 20 0 0 0 20-20v-40a12 12 0 0 0-12-12m-160-8a12 12 0 0 0 12-12v-40a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12m104 56h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};