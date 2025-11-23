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

export const PiMountainsThin = (props: IconProps) => {
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
        <Path d="M164 76a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16m87.44 162-54.56-92.08a11.91 11.91 0 0 0-10.33-5.92 11.89 11.89 0 0 0-10.32 5.88l-29.61 50-48.28-81.97a12 12 0 0 0-20.68 0L4.55 198A4 4 0 0 0 8 204h240a4 4 0 0 0 3.44-6M84.55 78a4 4 0 0 1 6.9 0l27.12 46H57.43ZM15 196l37.71-64h70.58L161 196Zm155.29 0-19-32.29L183.11 110a4 4 0 0 1 6.88 0l51 86Z" />
      </G>
    </Svg>
  );
};