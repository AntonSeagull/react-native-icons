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

export const PiTowelFill = (props: IconProps) => {
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
        <Path d="M224 48v104a8 8 0 0 1-8.53 8 8.17 8.17 0 0 1-7.47-8.25V48a8 8 0 0 0-8.55-8 8.19 8.19 0 0 0-7.45 8.28V180a4 4 0 0 1-4 4H52a4 4 0 0 1-4-4V48a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24m-36 152H52a4 4 0 0 0-4 4v12a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-12a4 4 0 0 0-4-4" />
      </G>
    </Svg>
  );
};