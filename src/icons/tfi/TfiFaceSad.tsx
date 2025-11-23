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

export const TfiFaceSad = (props: IconProps) => {
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
        <Path d="M8.5 0C3.813 0 0 3.813 0 8.5S3.813 17 8.5 17 17 13.187 17 8.5 13.187 0 8.5 0m0 16C4.364 16 1 12.636 1 8.5S4.364 1 8.5 1 16 4.364 16 8.5 12.636 16 8.5 16m4.5-3a.5.5 0 0 1-1 0c0-1.93-1.57-3.5-3.5-3.5S5 11.07 5 13a.5.5 0 0 1-1 0c0-2.481 2.019-4.5 4.5-4.5S13 10.519 13 13M4.5 5.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
      </G>
    </Svg>
  );
};