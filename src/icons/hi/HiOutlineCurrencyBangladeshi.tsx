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

export const HiOutlineCurrencyBangladeshi = (props: IconProps) => {
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
        <Path strokeLinecap="round" strokeLinejoin="round" d="M11 11V9a2 2 0 0 0-2-2m2 4v4a2 2 0 1 0 4 0v-1m-4-3H9m2 0h4m6 1a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
      </G>
    </Svg>
  );
};