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

export const CiHospital1 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M18.435 7.5h-1.93V5.56a2.5 2.5 0 0 0-2.5-2.5h-4a2.5 2.5 0 0 0-2.5 2.5V7.5h-1.94a2.5 2.5 0 0 0-2.5 2.5v9.44a1.51 1.51 0 0 0 1.5 1.5h14.87a1.5 1.5 0 0 0 1.5-1.5V10a2.5 2.5 0 0 0-2.5-2.5M7.505 19.94h-2.94a.51.51 0 0 1-.5-.5V10a1.5 1.5 0 0 1 1.5-1.5h1.94Zm8 0h-1.5v-2.5a2.04 2.04 0 0 0-.59-1.42 2 2 0 0 0-3.41 1.42v2.5h-1.5V5.56a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Zm4.43-.5a.5.5 0 0 1-.5.5h-2.93V8.5h1.93a1.5 1.5 0 0 1 1.5 1.5Z" />
        <Path d="M14.505 8.56a.5.5 0 0 1-.5.5h-1.5v1.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-1.5h-1.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5h1.5v-1.5a.5.5 0 0 1 .5-.5.51.51 0 0 1 .5.5v1.5h1.5a.51.51 0 0 1 .5.5M5.786 13.217a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5M5.786 17.717a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5M18.221 13.217a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5M18.221 17.717a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 1 0v1.5a.5.5 0 0 1-.5.5" />
      </G>
    </Svg>
  );
};