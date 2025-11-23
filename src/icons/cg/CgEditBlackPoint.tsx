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

export const CgEditBlackPoint = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clipRule="evenodd" />
        <Path fill="currentColor" fillRule="evenodd" d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9 7a7 7 0 1 1 0-14 7 7 0 0 1 0 14" clipRule="evenodd" />
      </G>
    </Svg>
  );
};