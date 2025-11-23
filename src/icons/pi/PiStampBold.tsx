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

export const PiStampBold = (props: IconProps) => {
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
        <Path d="M228 224a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m0-80v32a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-32a20 20 0 0 1 20-20h48L83.55 54.33A36 36 0 0 1 119 12h18a36 36 0 0 1 35.44 42.33L160 124h48a20 20 0 0 1 20 20M107.17 50.11l13.2 73.89h15.26l13.2-73.89A12 12 0 0 0 137 36h-18a12 12 0 0 0-11.82 14.11ZM204 148H52v24h152Z" />
      </G>
    </Svg>
  );
};