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

export const TfiInfoAlt = (props: IconProps) => {
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
        <Path d="M8.5 0C3.813 0 0 3.813 0 8.5S3.813 17 8.5 17 17 13.187 17 8.5 13.187 0 8.5 0m0 16C4.364 16 1 12.636 1 8.5S4.364 1 8.5 1 16 4.364 16 8.5 12.636 16 8.5 16m.5-3.631h.979v1H7.021v-1H8v-4.42h-.946v-1H9zM7.185 4.986a.985.985 0 1 1 1.97-.001.985.985 0 0 1-1.97.001" />
      </G>
    </Svg>
  );
};