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

export const IoArrowDownLeftBoxSharp = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M32 480V315.636h32v109.737l43.636-43.637v22.628h22.628L86.627 448h109.737v32zm286.628-264L130.264 404.364H480V32H107.636v349.736L296 193.373z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};