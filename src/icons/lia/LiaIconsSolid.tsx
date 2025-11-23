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

export const LiaIconsSolid = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5Zm2 2h8v8H7Zm10 0h8v8h-8Zm-6 2-3 4h6Zm8 0v4h4V9ZM7 17h8v8H7Zm10 0h8v8h-8Zm4 1-2 3 2 3 2-3Zm-10 1a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4" />
      </G>
    </Svg>
  );
};