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

export const Imning = (props: IconProps) => {
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
        <Path d="m8 1.45 6.705 13.363H1.296zM8 0c-.345 0-.69.233-.951.698L.22 14.309C-.303 15.239.142 16 1.209 16h13.583c1.067 0 1.512-.761.989-1.691L8.952.698C8.69.233 8.346 0 8.001 0z" />
        <Path d="M9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 11a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1" />
      </G>
    </Svg>
  );
};