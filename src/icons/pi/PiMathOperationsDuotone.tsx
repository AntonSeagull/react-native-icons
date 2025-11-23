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

export const PiMathOperationsDuotone = (props: IconProps) => {
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
        <Path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity={0.2} />
        <Path d="M112 72a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 104H80v-24a8 8 0 0 0-16 0v24H40a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16m48 0h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-61.66-90.34a8 8 0 0 0 11.32 0L184 83.31l18.34 18.35a8 8 0 0 0 11.32-11.32L195.31 72l18.35-18.34a8 8 0 0 0-11.32-11.32L184 60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L172.69 72l-18.35 18.34a8 8 0 0 0 0 11.32" />
      </G>
    </Svg>
  );
};