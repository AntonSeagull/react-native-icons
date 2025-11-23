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

export const RxAngle = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M8.891 2.194a.5.5 0 0 1 .115.697L2.474 12H13.5a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.406-.791l7.1-9.9a.5.5 0 0 1 .697-.115M11.1 6.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M10.4 4a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.7 4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m1.3 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};