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

export const VscLayout = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 2 2 3v10l1 1h4l1-1V3L7 2zm0 11V3h4v10zM10 3l1-1h3l1 1v3l-1 1h-3l-1-1zm1 0v3h3V3zM10 10l1-1h3l1 1v3l-1 1h-3l-1-1zm1 0v3h3v-3z" />
      </G>
    </Svg>
  );
};