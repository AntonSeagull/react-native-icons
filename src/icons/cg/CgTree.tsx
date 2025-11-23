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

export const CgTree = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M11 17.9A5 5 0 0 1 7 13V7a5 5 0 0 1 10 0v6a5 5 0 0 1-4 4.9V21a1 1 0 1 1-2 0zM12 4a3 3 0 0 1 3 3v6a3 3 0 0 1-2 2.83V11a1 1 0 1 0-2 0v4.83A3 3 0 0 1 9 13V7a3 3 0 0 1 3-3" clipRule="evenodd" />
      </G>
    </Svg>
  );
};