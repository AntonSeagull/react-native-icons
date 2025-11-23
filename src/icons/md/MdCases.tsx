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

export const MdCases = (props: IconProps) => {
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
        <Path d="M18 6V4l-2-2h-5L9 4v2H5v11s1 2 2 2h13s2-.98 2-2V6zM4 9H2v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H4zm7-4c0-.55.53-1 1-1h3c.46 0 1 .54 1 1v1h-5zM5 6h17v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2z" />
      </G>
    </Svg>
  );
};