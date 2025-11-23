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

export const CgStopwatch = (props: IconProps) => {
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
        <Path fill="currentColor" d="M18.621 2.55 21.45 5.38l-1.414 1.414-2.829-2.828zM12.823 8.6h-2v4h2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M5.186 18.814A9 9 0 1 0 17.914 6.086 9 9 0 0 0 5.186 18.814m1.415-1.415A7 7 0 1 0 16.5 7.5a7 7 0 0 0-9.9 9.9" clipRule="evenodd" />
      </G>
    </Svg>
  );
};