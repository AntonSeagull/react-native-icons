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

export const LiaCarBatterySolid = (props: IconProps) => {
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
        <Path d="M8 6v2h4V6Zm12 0v2h4V6ZM4 9v18h24V9Zm2 2h20v14H6Zm14 4v2h-2v2h2v2h2v-2h2v-2h-2v-2ZM8 17v2h6v-2Z" />
      </G>
    </Svg>
  );
};