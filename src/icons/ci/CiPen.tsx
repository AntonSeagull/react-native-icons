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

export const CiPen = (props: IconProps) => {
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
        <Path d="M20.235 11.284a2.3 2.3 0 0 0-3.01-.149l-1.781-5.391a2.48 2.48 0 0 0-2.1-1.7l-8.581-.93a1.5 1.5 0 0 0-1.648 1.651l.93 8.579a2.48 2.48 0 0 0 1.7 2.1l5.39 1.77a2.26 2.26 0 0 0-.51 1.43 2.257 2.257 0 0 0 2.25 2.25 2.26 2.26 0 0 0 1.591-.661l5.77-5.769a2.25 2.25 0 0 0 0-3.181Zm-14.18 3.21a1.5 1.5 0 0 1-1.02-1.26l-.9-8.39 4.01 4.01a1.19 1.19 0 0 0 .281 1.221 1.167 1.167 0 1 0 1.649-1.651 1.14 1.14 0 0 0-1.209-.269l-4.02-4.02 8.39.9a1.48 1.48 0 0 1 1.259 1.02l1.931 5.86-4.51 4.51Zm11.709-2.51a1.25 1.25 0 0 1 2.13.891 1.24 1.24 0 0 1-.369.88l-5.771 5.77a1.277 1.277 0 0 1-1.769 0 1.253 1.253 0 0 1 0-1.76Z" />
      </G>
    </Svg>
  );
};