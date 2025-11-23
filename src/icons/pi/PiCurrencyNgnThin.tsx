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

export const PiCurrencyNgnThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M216 140h-20v-24h20a4 4 0 0 0 0-8h-20V46a4 4 0 0 0-8 0v62h-70.54L67.15 43.54A4 4 0 0 0 60 46v62H40a4 4 0 0 0 0 8h20v24H40a4 4 0 0 0 0 8h20v62a4 4 0 0 0 8 0v-62h70.54l50.31 64.46A4 4 0 0 0 192 214a3.9 3.9 0 0 0 1.3-.22A4 4 0 0 0 196 210v-62h20a4 4 0 0 0 0-8m-28-24v24h-45.56l-18.73-24ZM68 57.63 107.32 108H68ZM68 140v-24h45.56l18.73 24Zm120 58.37L148.68 148H188Z" />
      </G>
    </Svg>
  );
};