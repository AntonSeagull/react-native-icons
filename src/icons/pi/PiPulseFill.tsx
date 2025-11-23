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

export const PiPulseFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-19.36L159 188a8 8 0 0 1-6.95 4h-.46a8 8 0 0 1-6.89-4.84L103 89.92 79 132a8 8 0 0 1-7 4H48a8 8 0 0 1 0-16h19.36l29.69-52a8 8 0 0 1 14.3.82L153 166.08l24-42.05a8 8 0 0 1 6.95-4h24a8 8 0 0 1 0 16Z" />
      </G>
    </Svg>
  );
};