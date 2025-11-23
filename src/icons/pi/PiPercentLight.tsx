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

export const PiPercentLight = (props: IconProps) => {
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
        <Path d="m204.24 60.23-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 1 1 8.48 8.49ZM52 100a34 34 0 1 1 24 10 33.78 33.78 0 0 1-24-10m2-24a22 22 0 1 0 6.44-15.56A21.86 21.86 0 0 0 54 76m160 104a34 34 0 1 1-10-24 33.78 33.78 0 0 1 10 24m-12 0a21.87 21.87 0 0 0-6.44-15.56A22 22 0 1 0 202 180" />
      </G>
    </Svg>
  );
};