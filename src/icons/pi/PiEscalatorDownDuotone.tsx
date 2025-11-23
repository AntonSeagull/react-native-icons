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

export const PiEscalatorDownDuotone = (props: IconProps) => {
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
        <Path d="M232 160v40a8 8 0 0 1-8 8h-56L72 104H32a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h56l96 104h40a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM240 160v40a16 16 0 0 1-16 16h-56a8 8 0 0 1-5.88-2.57L68.5 112H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h56a8 8 0 0 1 5.88 2.57L187.5 144H224a16 16 0 0 1 16 16m-16 0h-40a8 8 0 0 1-5.88-2.57L84.5 56H32v40h40a8 8 0 0 1 5.88 2.57L171.5 200H224Z" />
      </G>
    </Svg>
  );
};