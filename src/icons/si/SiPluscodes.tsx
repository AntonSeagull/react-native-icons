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

export const SiPluscodes = (props: IconProps) => {
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
        <Path d="M12 0a2.4 2.4 0 0 0-2.4 2.4A2.4 2.4 0 0 0 12 4.8a2.4 2.4 0 0 0 2.4-2.4A2.4 2.4 0 0 0 12 0M9.543 9.543v4.914h4.914V9.543zM2.4 9.6A2.4 2.4 0 0 0 0 12a2.4 2.4 0 0 0 2.4 2.4A2.4 2.4 0 0 0 4.8 12a2.4 2.4 0 0 0-2.4-2.4m19.2 0a2.4 2.4 0 0 0-2.4 2.4 2.4 2.4 0 0 0 2.4 2.4A2.4 2.4 0 0 0 24 12a2.4 2.4 0 0 0-2.4-2.4M12 19.2a2.4 2.4 0 0 0-2.4 2.4A2.4 2.4 0 0 0 12 24a2.4 2.4 0 0 0 2.4-2.4 2.4 2.4 0 0 0-2.4-2.4" />
      </G>
    </Svg>
  );
};