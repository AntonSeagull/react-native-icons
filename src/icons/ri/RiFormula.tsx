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

export const RiFormula = (props: IconProps) => {
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
        <Path d="M10 2a4 4 0 0 0-4 4v3H3v2h3v7a2 2 0 0 1-2 2H3v2h1a4 4 0 0 0 4-4v-7h3V9H8V6a2 2 0 0 1 2-2h1V2zm5.202 14.997L11.891 21h2.595l2.014-2.434L18.514 21h2.595l-3.311-4.003L21.105 13h-2.596L16.5 15.428 14.491 13h-2.595z" />
      </G>
    </Svg>
  );
};