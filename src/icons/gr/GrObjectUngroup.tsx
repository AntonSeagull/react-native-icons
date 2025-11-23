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

export const GrObjectUngroup = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M1 1h3v3H1zm12 0h3v3h-3zM4 2h9m2 7h5M4 15h9M1 13h3v3H1zm12 0h3v3h-3zM2 4v9m13-9v9m5-5h3v3h-3zm-9 14h9M8 20h3v3H8zm12 0h3v3h-3zM9 16v4m13-9v9" />
      </G>
    </Svg>
  );
};