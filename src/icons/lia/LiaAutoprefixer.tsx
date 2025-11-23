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

export const LiaAutoprefixer = (props: IconProps) => {
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
        <Path d="m15.928 5-7.26 22h3.496l1.236-4h5.205l1.233 4h3.496zm.04 9.69h.073L17.986 21h-3.968zM9.267 21l-7.795.559L1 22.668 8.559 23zm13.431 0 .721 2L31 22.668l-.47-1.11z" />
      </G>
    </Svg>
  );
};