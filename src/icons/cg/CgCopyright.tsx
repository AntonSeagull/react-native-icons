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

export const CgCopyright = (props: IconProps) => {
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
        <Path fill="currentColor" d="m13.392 10.436 1.419-1.418a4 4 0 1 0 .176 5.798l-1.313-1.313h-.21a2 2 0 1 1-.073-3.067" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14" clipRule="evenodd" />
      </G>
    </Svg>
  );
};