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

export const GiMolecule = (props: IconProps) => {
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
        <Path d="M132.172 157.504a155 155 0 0 0-18.296 21.698 99.274 99.274 0 1 1 186.291-53.827 153.45 153.45 0 0 0-58.134-12.138h-1.982a152.77 152.77 0 0 0-107.879 44.267m105.97 263.021A153.88 153.88 0 0 1 93.014 311.583a99.286 99.286 0 1 0 162.84 108.154 156 156 0 0 1-15.719.8h-1.981zm125.101-231.262h-1.098a84.642 84.642 0 0 0-1.05 169.272h1.098a84.642 84.642 0 0 0 1.05-169.272m-104.8 83.317a103.834 103.834 0 0 1 78.317-99.286 134.14 134.14 0 0 0-94.942-40.96h-1.743a134.566 134.566 0 0 0-1.67 269.107h1.742a134 134 0 0 0 85.31-30.53 103.92 103.92 0 0 1-67.014-98.33z" />
      </G>
    </Svg>
  );
};