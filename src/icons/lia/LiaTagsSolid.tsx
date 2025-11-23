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

export const LiaTagsSolid = (props: IconProps) => {
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
        <Path d="m14.594 4-.313.281-11 11-.687.719.687.719 9 9 .719.687.719-.687 11-11 .281-.313V4Zm.844 2H23v7.563l-10 10L5.438 16ZM26 7v2h1v8.156l-9.5 9.438-1.25-1.25-1.406 1.406 1.937 1.969.719.687.688-.687 10.53-10.407L29 18V7Zm-6 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" />
      </G>
    </Svg>
  );
};