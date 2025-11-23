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

export const RiChatOffFill = (props: IconProps) => {
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
        <Path d="m2.808 1.393 19.799 19.8-1.415 1.414-3.607-3.608L6.455 19 2 22.5V4c0-.17.042-.329.116-.469l-.722-.723zM21 3a1 1 0 0 1 1 1v13.785L7.214 3z" />
      </G>
    </Svg>
  );
};