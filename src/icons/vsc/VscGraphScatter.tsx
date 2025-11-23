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

export const VscGraphScatter = (props: IconProps) => {
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
        <Path d="M15 13v1H1.5l-.5-.5V0h1v13z" />
        <Path d="M5 2h2v2H5zM12 1h2v2h-2zM8 5h2v2H8zM5 9h2v2H5zM12 8h2v2h-2z" />
      </G>
    </Svg>
  );
};