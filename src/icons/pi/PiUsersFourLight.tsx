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

export const PiUsersFourLight = (props: IconProps) => {
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
        <Path d="M28.4 124.8a6 6 0 0 0 8.4-1.2 54 54 0 0 1 86.4 0 6 6 0 0 0 8.4 1.19 5.6 5.6 0 0 0 1.19-1.19 54 54 0 0 1 86.4 0 6 6 0 0 0 9.6-7.21 65.74 65.74 0 0 0-29.69-22.26 38 38 0 1 0-46.22 0A65.3 65.3 0 0 0 128 110.7a65.3 65.3 0 0 0-24.89-16.57 38 38 0 1 0-46.22 0A65.7 65.7 0 0 0 27.2 116.4a6 6 0 0 0 1.2 8.4M176 38a26 26 0 1 1-26 26 26 26 0 0 1 26-26m-96 0a26 26 0 1 1-26 26 26 26 0 0 1 26-26m119.11 160.13a38 38 0 1 0-46.22 0A65.3 65.3 0 0 0 128 214.7a65.3 65.3 0 0 0-24.89-16.57 38 38 0 1 0-46.22 0A65.7 65.7 0 0 0 27.2 220.4a6 6 0 1 0 9.6 7.2 54 54 0 0 1 86.4 0 6 6 0 0 0 8.4 1.19 5.6 5.6 0 0 0 1.19-1.19 54 54 0 0 1 86.4 0 6 6 0 0 0 9.6-7.21 65.74 65.74 0 0 0-29.68-22.26M80 142a26 26 0 1 1-26 26 26 26 0 0 1 26-26m96 0a26 26 0 1 1-26 26 26 26 0 0 1 26-26" />
      </G>
    </Svg>
  );
};