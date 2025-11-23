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

export const TbPlant2 = (props: IconProps) => {
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
        <Path d="M2 9a10 10 0 1 0 20 0" />
        <Path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10" />
        <Path d="M12 4a9.7 9.7 0 0 1 2.99 7.5M9.01 11.5A9.7 9.7 0 0 1 12 4" />
      </G>
    </Svg>
  );
};