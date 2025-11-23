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

export const LiaSuperpowers = (props: IconProps) => {
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
        <Path d="M29 3 14.877 5.057l-.889.129.014.005C8.888 6.135 5 10.618 5 16c0 3.032 1.235 5.782 3.227 7.773L3 29l14.123-2.057.889-.129-.014-.005C23.112 25.865 27 21.382 27 16c0-3.033-1.235-5.782-3.227-7.773zM16 7c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9" />
      </G>
    </Svg>
  );
};