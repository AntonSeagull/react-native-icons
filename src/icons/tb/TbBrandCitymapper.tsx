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

export const TbBrandCitymapper = (props: IconProps) => {
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
        <Path d="M3 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM21 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM8 12h8M13 9l3 3-3 3" />
      </G>
    </Svg>
  );
};