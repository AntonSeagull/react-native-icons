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

export const TbBrandPnpm = (props: IconProps) => {
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
        <Path d="M3 17h4v4H3zM10 17h4v4h-4zM17 17h4v4h-4zM17 10h4v4h-4zM17 3h4v4h-4zM10 10h4v4h-4zM10 3h4v4h-4zM3 3h4v4H3z" />
      </G>
    </Svg>
  );
};