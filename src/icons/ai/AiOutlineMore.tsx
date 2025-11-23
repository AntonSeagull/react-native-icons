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

export const AiOutlineMore = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#333" d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0m0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0m0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0" />
      </G>
    </Svg>
  );
};