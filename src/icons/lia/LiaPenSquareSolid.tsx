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

export const LiaPenSquareSolid = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm13.127 1.877a3 3 0 0 0-2.125.875l-8.266 8.266-.03.312-.47 3.315-.218 1.343 1.343-.218 3.313-.47.312-.03 8.268-8.266c1.16-1.16 1.16-3.09 0-4.25a3 3 0 0 0-2.127-.877m0 2c.254 0 .52.082.719.281a.98.98 0 0 1 .031 1.375l-.031.031-7.797 7.829-1.656.218.218-1.656 7.828-7.797a.94.94 0 0 1 .688-.281" />
      </G>
    </Svg>
  );
};