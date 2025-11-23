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

export const LiaTableSolid = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5Zm2 2h5v5H7Zm7 0h4v5h-4Zm6 0h5v5h-5ZM7 14h5v4H7Zm7 0h4v4h-4Zm6 0h5v4h-5ZM7 20h5v5H7Zm7 0h4v5h-4Zm6 0h5v5h-5Z" />
      </G>
    </Svg>
  );
};