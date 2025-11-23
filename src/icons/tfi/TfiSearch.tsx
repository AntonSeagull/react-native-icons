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

export const TfiSearch = (props: IconProps) => {
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
        <Path d="m16.604 15.868-5.173-5.173A6.47 6.47 0 0 0 13 6.472c0-3.584-2.916-6.5-6.5-6.5a6.47 6.47 0 0 0-4.598 1.903A6.46 6.46 0 0 0 0 6.472c0 3.584 2.916 6.5 6.5 6.5a6.47 6.47 0 0 0 4.224-1.569l5.173 5.173zM6.5 11.972a5.506 5.506 0 0 1-5.5-5.5 5.46 5.46 0 0 1 1.61-3.889A5.46 5.46 0 0 1 6.5.972c3.032 0 5.5 2.467 5.5 5.5s-2.468 5.5-5.5 5.5" />
      </G>
    </Svg>
  );
};