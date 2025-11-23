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

export const PiTelevisionDuotone = (props: IconProps) => {
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
        <Path d="M152 72v136H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Z" opacity={0.2} />
        <Path d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69 85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M40 80h104v120H40Zm176 120h-56V80h56zm-16-84a12 12 0 1 1-12-12 12 12 0 0 1 12 12m0 48a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};