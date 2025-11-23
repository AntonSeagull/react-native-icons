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

export const PiCurrencyEurBold = (props: IconProps) => {
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
        <Path d="M192.94 189.66a12 12 0 0 1-.94 17A84 84 0 0 1 53.55 160H40a12 12 0 0 1 0-24h12v-16H40a12 12 0 0 1 0-24h13.55A84 84 0 0 1 192 49.39a12 12 0 0 1-16 17.89A60 60 0 0 0 78.18 96H136a12 12 0 0 1 0 24H76v16h44a12 12 0 0 1 0 24H78.18A60 60 0 0 0 176 188.72a12 12 0 0 1 16.94.94" />
      </G>
    </Svg>
  );
};