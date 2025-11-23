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

export const VscSymbolKeyword = (props: IconProps) => {
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
        <Path d="M15 4h-5V3h5zm-1 3h-2v1h2zm-4 0H1v1h9zm2 6H1v1h11zm-5-3H1v1h6zm8 0h-5v1h5zM8 2v3H1V2zM7 3H2v1h5z" />
      </G>
    </Svg>
  );
};