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

export const PiPlugChargingLight = (props: IconProps) => {
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
        <Path d="M224 58h-50V16a6 6 0 0 0-12 0v42H94V16a6 6 0 0 0-12 0v42H32.55A6.1 6.1 0 0 0 26 64a6 6 0 0 0 6 6h18v90a38 38 0 0 0 38 38h34v42a6 6 0 0 0 12 0v-42h34a38 38 0 0 0 38-38V70h18a6 6 0 0 0 0-12m-30 102a26 26 0 0 1-26 26H88a26 26 0 0 1-26-26V70h132Zm-86.93-28.58a6 6 0 0 1-.69-5.53l12-32a6 6 0 1 1 11.24 4.22l-9 23.89H144a6 6 0 0 1 5.62 8.11l-12 32a6 6 0 0 1-11.24-4.22l9-23.89H112a6 6 0 0 1-4.93-2.58" />
      </G>
    </Svg>
  );
};