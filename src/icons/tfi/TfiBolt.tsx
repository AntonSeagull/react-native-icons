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

export const TfiBolt = (props: IconProps) => {
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
        <Path d="M14.313 2.012H7.161L4.83 9.026h1.666l-2.01 6.052 9.483-8.051h-2.904zm-3.066 6.015L6.56 12.006l1.322-3.979H6.217l1.665-5.015h4.592L9.226 8.027z" />
      </G>
    </Svg>
  );
};