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

export const SiKickstarter = (props: IconProps) => {
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
        <Path d="M7.168 0c-3.2 0-5.797 2.579-5.797 5.758v12.484C1.371 21.42 3.968 24 7.168 24a5.8 5.8 0 0 0 4.768-2.479l.794.79c2.26 2.245 5.943 2.245 8.203 0a5.72 5.72 0 0 0 1.696-4.075 5.72 5.72 0 0 0-1.696-4.074l-2.182-2.168 2.182-2.156a5.72 5.72 0 0 0 1.696-4.074 5.72 5.72 0 0 0-1.696-4.074c-2.26-2.246-5.942-2.246-8.203 0l-.794.789A5.8 5.8 0 0 0 7.168 0" />
      </G>
    </Svg>
  );
};