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

export const LiaEggSolid = (props: IconProps) => {
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
        <Path d="M16 3c-3 0-5.7 2.3-7.7 5.2S5 14.7 5 18c0 3.5 1.2 6.3 3.2 8.2C10.3 28 13 29 16 29s5.7-.9 7.8-2.8S27 21.5 27 18c0-3.3-1.3-6.9-3.3-9.8S19 3 16 3m0 2c1.9 0 4.2 1.7 6 4.3s3 6 3 8.7c0 3.1-1 5.3-2.6 6.7-1.6 1.5-3.8 2.3-6.4 2.3s-4.8-.8-6.4-2.3S7 21 7 18c0-2.8 1.2-6.1 3-8.7S14.1 5 16 5" />
      </G>
    </Svg>
  );
};