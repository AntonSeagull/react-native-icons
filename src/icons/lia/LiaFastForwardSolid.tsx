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

export const LiaFastForwardSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 5v7.375L6.594 6.188 5 5.03V26.97l1.594-1.157L15 19.626V27l1.594-1.187 12-9L29.656 16l-1.062-.812-12-9ZM7 8.969l8.406 6.187 1.125.844-1.125.844L7 23.03ZM17 9l9.313 7L17 23Z" />
      </G>
    </Svg>
  );
};