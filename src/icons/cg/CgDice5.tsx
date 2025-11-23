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

export const CgDice5 = (props: IconProps) => {
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
        <Path fill="currentColor" d="M14.945 7.055a2 2 0 1 1 4 0 2 2 0 0 1-4 0M16.945 14.892a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5.055 16.892a2 2 0 1 1 4 0 2 2 0 0 1-4 0M7.055 5.055a2 2 0 1 0 0 4 2 2 0 0 0 0-4M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};