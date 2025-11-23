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

export const TfiStar = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16.647 7.017h-6.225L8.5 1.097l-1.923 5.92H.353l5.035 3.658-1.922 5.92L8.5 12.936l5.035 3.659-1.922-5.92zm-5.014 6.96L8.5 11.699l-3.133 2.277 1.197-3.685-3.133-2.274h3.873L8.5 4.333l1.196 3.684h3.873l-3.133 2.275z" />
      </G>
    </Svg>
  );
};