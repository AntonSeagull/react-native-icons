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

export const PiOfficeChairLight = (props: IconProps) => {
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
        <Path d="M246 128a6 6 0 0 1-6 6h-18.39A46.07 46.07 0 0 1 176 174h-42v28h26a30 30 0 0 1 30 30 6 6 0 0 1-12 0 18 18 0 0 0-18-18h-26v18a6 6 0 0 1-12 0v-18H96a18 18 0 0 0-18 18 6 6 0 0 1-12 0 30 30 0 0 1 30-30h26v-28H80a46.07 46.07 0 0 1-45.61-40H16a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6 34 34 0 0 0 34 34h96a34 34 0 0 0 34-34 6 6 0 0 1 6-6h24a6 6 0 0 1 6 6m-176.57 9.17A14 14 0 0 1 66.14 126l13.72-96a14.07 14.07 0 0 1 13.86-12h68.56a14.07 14.07 0 0 1 13.86 12l13.72 96A14 14 0 0 1 176 142H80a14 14 0 0 1-10.57-4.83m9.06-7.86A2 2 0 0 0 80 130h96a2 2 0 0 0 1.51-.69 2 2 0 0 0 .47-1.59l-13.72-96a2 2 0 0 0-2-1.72H93.72a2 2 0 0 0-2 1.72l-13.72 96a2 2 0 0 0 .49 1.59" />
      </G>
    </Svg>
  );
};