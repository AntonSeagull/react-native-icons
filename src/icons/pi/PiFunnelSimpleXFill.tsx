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

export const PiFunnelSimpleXFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 128a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H80a8 8 0 0 1-8-8m56 48h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m69.66 10.34a8 8 0 0 1-11.32 11.32L176 187.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L164.69 176l-10.35-10.34a8 8 0 0 1 11.32-11.32L176 164.69l10.34-10.35a8 8 0 0 1 11.32 11.32L187.31 176ZM208 96H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};