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

export const TfiMicrophone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.5 12c2.481 0 4.5-2.019 4.5-4.5v-3C13 2.189 11.244.303 9 .051V0H8v.051C5.756.303 4 2.189 4 4.5v3C4 9.981 6.019 12 8.5 12M6 2.059V4h1V1.352a3.5 3.5 0 0 1 1-.301V4h1V1.051a3.4 3.4 0 0 1 1 .301V4h1V2.059c.617.631 1 1.491 1 2.441V5H5v-.5c0-.95.383-1.811 1-2.441M5 6h7v1.5c0 1.93-1.57 3.5-3.5 3.5S5 9.43 5 7.5zm10 1v3.25c0 2.067-2.019 3.75-4.5 3.75H9v3H8v-3H6.5C4.019 14 2 12.317 2 10.25V7h1v3.25C3 11.767 4.57 13 6.5 13h4c1.93 0 3.5-1.233 3.5-2.75V7z" />
      </G>
    </Svg>
  );
};