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

export const RiCollapseDiagonal2Fill = (props: IconProps) => {
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
        <Path d="M3.5 11H11V3.5L7.957 6.543l-3.25-3.25-1.414 1.414 3.25 3.25zm17 2H13v7.5l3.043-3.043 3.25 3.25 1.414-1.414-3.25-3.25z" />
      </G>
    </Svg>
  );
};