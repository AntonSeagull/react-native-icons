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

export const GrAnalytics = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M20 7c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 18.52 2 13 6.48 3 12 3m0-2v12l9.6-7.2C19.41 2.89 15.92 1 12 1Z" />
      </G>
    </Svg>
  );
};