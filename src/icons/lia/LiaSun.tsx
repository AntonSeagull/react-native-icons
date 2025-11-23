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

export const LiaSun = (props: IconProps) => {
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
        <Path d="M15 3v5h2V3ZM7.5 6.094 6.094 7.5l3.531 3.563 1.438-1.438Zm17 0-3.562 3.531 1.437 1.438L25.906 7.5ZM16 9c-3.855 0-7 3.145-7 7s3.145 7 7 7 7-3.145 7-7-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5M3 15v2h5v-2Zm21 0v2h5v-2ZM9.625 20.938 6.094 24.5 7.5 25.906l3.563-3.531Zm12.75 0-1.437 1.437 3.562 3.531 1.406-1.406ZM15 24v5h2v-5Z" />
      </G>
    </Svg>
  );
};