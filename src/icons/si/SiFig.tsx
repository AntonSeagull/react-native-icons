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

export const SiFig = (props: IconProps) => {
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
        <Path d="M4.543 0A4.543 4.543 0 0 0 0 4.543v14.914A4.543 4.543 0 0 0 4.543 24h14.914A4.543 4.543 0 0 0 24 19.457V4.543A4.543 4.543 0 0 0 19.457 0zm10.715 2.572h3.086a3.3 3.3 0 0 1 .656.065 3.3 3.3 0 0 1 .898.326q.139.076.268.164.131.087.252.186a3.3 3.3 0 0 1 .789.96q.076.14.139.286a3.2 3.2 0 0 1 .187.61 3.3 3.3 0 0 1 .067.66v12.343a3.3 3.3 0 0 1-.146.97 3 3 0 0 1-.108.3 3.3 3.3 0 0 1-.301.552 3.3 3.3 0 0 1-.627.694q-.12.098-.252.185a3.2 3.2 0 0 1-.553.3 3.2 3.2 0 0 1-1.27.255h-3.085a3.3 3.3 0 0 1-.658-.065 3.24 3.24 0 0 1-2.344-1.922 3.2 3.2 0 0 1-.256-1.27V5.829a3.3 3.3 0 0 1 .393-1.555 3.2 3.2 0 0 1 1.04-1.146 3.2 3.2 0 0 1 .553-.3 3.3 3.3 0 0 1 1.272-.255z" />
      </G>
    </Svg>
  );
};