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

export const CgArrowLongLeftL = (props: IconProps) => {
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
        <Path fill="currentColor" d="M5.208 7.757.97 12.003l4.246 4.24 1.413-1.416-1.819-1.815 16.214.018-.004 2 2 .004.012-6-2-.004-.006 2.989.001-.99-16.24-.018 1.838-1.84z" />
      </G>
    </Svg>
  );
};