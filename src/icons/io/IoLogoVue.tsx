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

export const IoLogoVue = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m256 144.03-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43z" />
        <Path d="M409.4 47.92 256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92z" />
      </G>
    </Svg>
  );
};