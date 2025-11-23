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

export const TbHemispherePlus = (props: IconProps) => {
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
        <Path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9" />
        <Path d="M3 9a9 9 0 0 0 9 9m8.396-5.752A9 9 0 0 0 21 9M16 19h6M19 16v6" />
      </G>
    </Svg>
  );
};