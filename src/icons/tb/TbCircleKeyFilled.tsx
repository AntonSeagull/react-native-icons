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

export const TbCircleKeyFilled = (props: IconProps) => {
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
        <Path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0C2 6.477 6.477 2 12 2m2 5a3 3 0 0 0-2.98 2.65l-.015.174L11 10l.005.176q.03.48.197.908l.09.209-3.5 3.5-.082.094a1 1 0 0 0 0 1.226l.083.094 1.5 1.5.094.083a1 1 0 0 0 1.226 0l.094-.083.083-.094a1 1 0 0 0 0-1.226l-.083-.094-.792-.793.585-.585.793.792.094.083a1 1 0 0 0 1.403-1.403l-.083-.094-.792-.793.792-.792A3 3 0 1 0 14 7m0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </G>
    </Svg>
  );
};