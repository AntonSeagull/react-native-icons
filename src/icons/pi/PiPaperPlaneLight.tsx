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

export const PiPaperPlaneLight = (props: IconProps) => {
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
        <Path d="M236.17 201.09 140.1 33.16a14 14 0 0 0-24.41 0l-95.88 168a14 14 0 0 0 16.87 20.05L128 190.34l91.33 30.85a14.3 14.3 0 0 0 4.67.81 14 14 0 0 0 12.13-20.91Zm-10.66 8.18a1.87 1.87 0 0 1-2.2.6h-.1L134 179.7V120a6 6 0 0 0-12 0v59.7l-89.2 30.13h-.1a1.87 1.87 0 0 1-2.2-.6 1.84 1.84 0 0 1-.24-2.22L126.14 39a1.93 1.93 0 0 1 1.74-1 2 2 0 0 1 1.78 1.07L225.73 207a1.86 1.86 0 0 1-.22 2.27" />
      </G>
    </Svg>
  );
};