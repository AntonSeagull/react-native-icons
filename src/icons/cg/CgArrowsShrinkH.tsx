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

export const CgArrowsShrinkH = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" d="M1 7h2v10H1zM8.448 7.757l1.414 1.415L8.033 11h7.933l-1.828-1.828 1.414-1.415L19.795 12l-4.243 4.243-1.414-1.415L15.966 13H8.034l1.828 1.828-1.414 1.415L4.205 12zM23 7h-2v10h2z" />
      </G>
    </Svg>
  );
};