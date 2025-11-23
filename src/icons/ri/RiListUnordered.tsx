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

export const RiListUnordered = (props: IconProps) => {
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
        <Path d="M8 4h13v2H8zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M8 11h13v2H8zm0 7h13v2H8z" />
      </G>
    </Svg>
  );
};