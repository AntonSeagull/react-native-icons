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

export const PiNumberSquareTwoThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-56-32a4 4 0 0 1-4 4h-48a4 4 0 0 1-3.2-6.4L144 116a20 20 0 0 0-4-28 20 20 0 0 0-28 4 20.2 20.2 0 0 0-2.89 5.37 4 4 0 0 1-7.55-2.66 28.3 28.3 0 0 1 4-7.52 28 28 0 1 1 44.72 33.7L112 172h40a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};