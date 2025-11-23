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

export const VscGitFetch = (props: IconProps) => {
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
        <Path d="M9 2H8v1h1zM8.146 14l-5-5 .708-.707L8 12.439V11h1v1.44l4.146-4.147.707.707-5 5zM8 5h1v1H8z" />
        <Path d="M9 8H8v1h1z" />
      </G>
    </Svg>
  );
};