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

export const Imscript = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 14.219V15h2v1h-3v-2.281l2-.938V12h-2v-1h3v2.281zM10.563 4H8.438L5.5 6.938 2.562 4H.437l4 4-4 4h2.125L5.5 9.062 8.438 12h2.125l-4-4z" />
      </G>
    </Svg>
  );
};