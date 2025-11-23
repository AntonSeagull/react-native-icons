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

export const LiaQuoteRightSolid = (props: IconProps) => {
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
        <Path d="M4 8v10h8c0 2.219-1.781 4-4 4v2c3.3 0 6-2.7 6-6V8Zm14 0v10h8c0 2.219-1.781 4-4 4v2c3.3 0 6-2.7 6-6V8ZM6 10h6v6H6Zm14 0h6v6h-6Z" />
      </G>
    </Svg>
  );
};