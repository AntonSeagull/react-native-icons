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

export const PiSelectionForegroundLight = (props: IconProps) => {
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
        <Path d="M62 216a6 6 0 0 1-6 6h-8a14 14 0 0 1-14-14v-8a6 6 0 0 1 12 0v8a2 2 0 0 0 2 2h8a6 6 0 0 1 6 6m50-6H96a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m-72-44a6 6 0 0 0 6-6v-16a6 6 0 0 0-12 0v16a6 6 0 0 0 6 6m128 28a6 6 0 0 0-6 6v8a2 2 0 0 1-2 2h-8a6 6 0 0 0 0 12h8a14 14 0 0 0 14-14v-8a6 6 0 0 0-6-6m0-84a6 6 0 0 0 6-6v-8a14 14 0 0 0-14-14h-8a6 6 0 0 0 0 12h8a2 2 0 0 1 2 2v8a6 6 0 0 0 6 6M56 82h-8a14 14 0 0 0-14 14v8a6 6 0 0 0 12 0v-8a2 2 0 0 1 2-2h8a6 6 0 0 0 0-12m152-48H96a14 14 0 0 0-14 14v40a6 6 0 0 0 6 6h24a6 6 0 0 0 0-12H94V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2v112a2 2 0 0 1-2 2h-34v-18a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6h40a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14" />
      </G>
    </Svg>
  );
};