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

export const IoReloadCircleSharp = (props: IconProps) => {
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
        <Path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48m120 190.77h-89l36.88-36.88-5.6-6.51a87.38 87.38 0 1 0-62.94 148 87.55 87.55 0 0 0 82.42-58.25l5.37-15.13 30.17 10.67-5.3 15.13a119.4 119.4 0 1 1-112.62-159.18 118.34 118.34 0 0 1 86.36 36.95l.56.62 4.31 5L376 149.81Z" />
      </G>
    </Svg>
  );
};