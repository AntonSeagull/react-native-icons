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

export const DiHackernews = (props: IconProps) => {
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
        <Path fill="#444" d="M25.339 6.166v18.802H6.537V6.166zm1.88-1.88H4.656v22.563h22.563zm-8.89 5.582h2.662l-3.755 7.051v4.23h-2.344v-4.23l-3.89-7.051h2.767l2.333 4.912z" />
      </G>
    </Svg>
  );
};