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

export const TbBrandBebo = (props: IconProps) => {
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
        <Path d="M12 17.5a3.5 3.5 0 0 0 3.5-3.5c0-1.838-1.159-3.002-3.005-3.372-.746-.15-1.37-.745-1.37-1.506 0-1.142.934-2.095 2.058-1.894C16.793 7.873 19 10.286 19 14a7 7 0 1 1-14 0V4.75a1.75 1.75 0 1 1 3.5 0V14a3.5 3.5 0 0 0 3.5 3.5" />
      </G>
    </Svg>
  );
};