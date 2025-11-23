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

export const VscLockSmall = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m3 8 1-1h8l1 1v5l-1 1H4l-1-1zm1 0v5h8V8zM11 7V5a3 3 0 0 0-6 0v2h1V5a2 2 0 1 1 4 0v2z" />
      </G>
    </Svg>
  );
};