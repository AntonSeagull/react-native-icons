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

export const TfiRuler = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 0v17h7V0zm6 16H6v-.984h2v-1H6V13h1v-1H6v-1h2v-1H6v-.984h1v-1H6v-1h2v-1H6V5h1V4H6V3h2V2H6V1h5z" />
      </G>
    </Svg>
  );
};