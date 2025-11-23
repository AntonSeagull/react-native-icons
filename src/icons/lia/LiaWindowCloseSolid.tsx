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

export const LiaWindowCloseSolid = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5Zm2 2h18v18H7Zm4.688 3.313-1.407 1.406L14.562 16l-4.343 4.344 1.406 1.406 4.344-4.344 4.312 4.313 1.407-1.407L17.375 16l4.25-4.25-1.406-1.406-4.25 4.25Z" />
      </G>
    </Svg>
  );
};