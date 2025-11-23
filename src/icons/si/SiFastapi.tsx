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

export const SiFastapi = (props: IconProps) => {
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
        <Path d="M12 .039c-6.627 0-12 5.354-12 11.96-.001 6.606 5.372 11.963 12 11.962S24.001 18.605 24 12 18.627.039 12 .039m-.829 5.415h7.55l-7.58 5.329h5.182L5.28 18.543Q8.226 12 11.171 5.455" />
      </G>
    </Svg>
  );
};