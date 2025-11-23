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

export const TbHomeRibbon = (props: IconProps) => {
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
        <Path d="M16 15h5v7l-2.5-1.5L16 22z" />
        <Path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
        <Path d="M9 21v-6a2 2 0 0 1 2-2h1.5" />
      </G>
    </Svg>
  );
};