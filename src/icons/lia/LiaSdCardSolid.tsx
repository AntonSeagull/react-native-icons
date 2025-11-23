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

export const LiaSdCardSolid = (props: IconProps) => {
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
        <Path d="m9.5 5-.312.406L6 9.656V27h19V5Zm1 2H23v18H8V10.344ZM13 9v4h2V9Zm3 0v4h2V9Zm3 0v4h2V9Zm-9 1v4h2v-4Z" />
      </G>
    </Svg>
  );
};