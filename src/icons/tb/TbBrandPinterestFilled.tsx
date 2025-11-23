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

export const TbBrandPinterestFilled = (props: IconProps) => {
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
        <Path d="M17 3.34a10 10 0 0 1-8.512 18.023l2.364-5.315A3.5 3.5 0 0 0 13.25 17c2.708 0 4.75-2.089 4.75-5a6 6 0 1 0-11.64 2.041 1 1 0 1 0 1.88-.682 4 4 0 1 1 7.76-1.36C16 13.817 14.844 15 13.25 15c-.609 0-1.153-.361-1.478-1.022l1.142-2.572a1 1 0 0 0-1.828-.812l-4.392 9.882A10 10 0 0 1 2 12l.005-.324A10 10 0 0 1 17 3.34" />
      </G>
    </Svg>
  );
};