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

export const PiProjectorScreenThin = (props: IconProps) => {
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
        <Path d="M216 76a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12H40a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12h4v104H32a4 4 0 0 0 0 8h92v24.4a20 20 0 1 0 8 0V188h92a4 4 0 0 0 0-8h-12V76Zm-76 156a12 12 0 1 1-12-12 12 12 0 0 1 12 12M36 64V48a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m168 116H52V76h152Z" />
      </G>
    </Svg>
  );
};