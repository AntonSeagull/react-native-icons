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

export const PiTagChevronBold = (props: IconProps) => {
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
        <Path d="m250 121.34-45.64-68.43A20 20 0 0 0 187.72 44H32a12 12 0 0 0-10 18.66L65.58 128 22 193.34A12 12 0 0 0 32 212h155.72a20 20 0 0 0 16.64-8.91L250 134.66a12 12 0 0 0 0-13.32M185.58 188H54.42L90 134.66a12 12 0 0 0 0-13.32L54.42 68h131.16l40 60Z" />
      </G>
    </Svg>
  );
};