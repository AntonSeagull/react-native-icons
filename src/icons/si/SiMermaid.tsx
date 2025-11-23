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

export const SiMermaid = (props: IconProps) => {
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
        <Path d="M23.99 2.115A12.22 12.22 0 0 0 12 10.149 12.22 12.22 0 0 0 .01 2.115a12.23 12.23 0 0 0 5.32 10.604 6.56 6.56 0 0 1 2.845 5.423v3.754h7.65v-3.754a6.56 6.56 0 0 1 2.844-5.423 12.22 12.22 0 0 0 5.32-10.604Z" />
      </G>
    </Svg>
  );
};