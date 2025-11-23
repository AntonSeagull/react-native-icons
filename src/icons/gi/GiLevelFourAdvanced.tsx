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

export const GiLevelFourAdvanced = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 16c48 96 24 120 72 168 0 0 48 0 72-24s24-72 24-72c-48-48-72-24-168-72m144 144c-24.57 24.57-39.75 58.51-39.75 96s15.18 71.43 39.75 96 58.51 39.75 96 39.75 71.43-15.18 96-39.75 39.78-58.51 39.78-96-15.21-71.43-39.78-96-58.51-39.75-96-39.75-71.43 15.18-96 39.75m192 0c24 24 72 24 72 24 48-48 24-72 72-168-96 48-120 24-168 72 0 0 0 48 24 72m0 192c-24 24-24 72-24 72 48 48 72 24 168 72-48-96-24-120-72-168 0 0-48 0-72 24m-192 0c-24-24-72-24-72-24-48 48-24 72-72 168 96-48 120-24 168-72 0 0 0-48-24-72m62.063-197.813h67.875v67.875h67.875v67.875h-67.875v67.875h-67.875v-67.875h-67.875v-67.875h67.875z" />
      </G>
    </Svg>
  );
};