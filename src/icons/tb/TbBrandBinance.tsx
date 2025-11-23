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

export const TbBrandBinance = (props: IconProps) => {
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
        <Path d="m6 8 2 2 4-4 4 4 2-2-6-6zM6 16l2-2 4 4 3.5-3.5 2 2L12 22zM20 10l2 2-2 2-2-2zM4 10l2 2-2 2-2-2zM12 10l2 2-2 2-2-2z" />
      </G>
    </Svg>
  );
};