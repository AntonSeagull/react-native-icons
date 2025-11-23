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

export const TfiPencilAlt2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.492 0H7.508c-.827 0-1.5.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959V1.5A1.503 1.503 0 0 0 9.492 0M7.508 1h1.984c.275 0 .5.225.5.5v1.019H7.008V1.5a.5.5 0 0 1 .5-.5m.57 13.021-.934-1.835h2.715l-.911 1.835zm-1.07-2.834V5.55h2.984v5.637zm0-6.637V3.519h2.984V4.55z" />
      </G>
    </Svg>
  );
};