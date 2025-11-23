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

export const PiNumberFiveBold = (props: IconProps) => {
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
        <Path d="M180 160a60 60 0 0 1-100 44.72 12 12 0 1 1 16-17.88 36 36 0 1 0 .69-54.28 12 12 0 0 1-19.54-11.49l15.08-75.42A12 12 0 0 1 104 36h64a12 12 0 0 1 0 24h-54.16l-8.36 41.79A60 60 0 0 1 180 160" />
      </G>
    </Svg>
  );
};