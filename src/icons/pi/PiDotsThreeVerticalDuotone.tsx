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

export const PiDotsThreeVerticalDuotone = (props: IconProps) => {
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
        <Path d="M176 32v192a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16" opacity={0.2} />
        <Path d="M140 128a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-12-56a12 12 0 1 0-12-12 12 12 0 0 0 12 12m0 112a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};