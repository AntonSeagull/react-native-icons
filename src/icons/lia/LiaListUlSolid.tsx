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

export const LiaListUlSolid = (props: IconProps) => {
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
        <Path d="M4 5v6h6V5Zm2 2h2v2H6Zm6 0v2h15V7Zm-8 6v6h6v-6Zm2 2h2v2H6Zm6 0v2h15v-2Zm-8 6v6h6v-6Zm2 2h2v2H6Zm6 0v2h15v-2Z" />
      </G>
    </Svg>
  );
};