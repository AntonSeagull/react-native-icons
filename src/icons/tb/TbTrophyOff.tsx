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

export const TbTrophyOff = (props: IconProps) => {
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
        <Path d="M8 21h8M12 17v4M8 4h9M17 4v8q0 .465-.082.905m-1.384 2.632A5 5 0 0 1 7 12V7M3 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" />
      </G>
    </Svg>
  );
};