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

export const IoArrowUpLeftBoxSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M32 32h164.364v32H86.627l43.637 43.636h-22.628v22.628L64 86.627v109.737H32zm264 286.627L107.636 130.264V480H480V107.636H130.264L318.628 296z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};