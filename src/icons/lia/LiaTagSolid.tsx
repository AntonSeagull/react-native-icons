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

export const LiaTagSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m16 5-.312.281L4.28 16.813l-.687.687.687.719 9.5 9.5.719.687.688-.687 11.53-11.407L27 16V5Zm.844 2H25v8.156L14.5 25.594 6.406 17.5ZM22 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" />
      </G>
    </Svg>
  );
};