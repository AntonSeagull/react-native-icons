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

export const LiaThSolid = (props: IconProps) => {
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
        <Path d="M3 6v20h26V6Zm2 2h4v4H5Zm6 0h4v4h-4Zm6 0h4v4h-4Zm6 0h4v4h-4ZM5 14h4v4H5Zm6 0h4v4h-4Zm6 0h4v4h-4Zm6 0h4v4h-4ZM5 20h4v4H5Zm6 0h4v4h-4Zm6 0h4v4h-4Zm6 0h4v4h-4Z" />
      </G>
    </Svg>
  );
};