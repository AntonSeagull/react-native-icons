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

export const MdOutlineGames = (props: IconProps) => {
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
        <Path d="M13 4v2.67l-1 1-1-1V4zm7 7v2h-2.67l-1-1 1-1zM6.67 11l1 1-1 1H4v-2zM12 16.33l1 1V20h-2v-2.67zM15 2H9v5.5l3 3 3-3zm7 7h-5.5l-3 3 3 3H22zM7.5 9H2v6h5.5l3-3zm4.5 4.5-3 3V22h6v-5.5z" />
      </G>
    </Svg>
  );
};