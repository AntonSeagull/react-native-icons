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

export const LiaOrcid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16 9.913 5 16 5m-5 3a1 1 0 0 0 0 2 1 1 0 0 0 0-2m-1 3v11h2V11zm4 0v11h4.5c3.026 0 5.5-2.474 5.5-5.5S21.526 11 18.5 11zm2 2h2.5c1.944 0 3.5 1.556 3.5 3.5S20.444 20 18.5 20H16z" />
      </G>
    </Svg>
  );
};