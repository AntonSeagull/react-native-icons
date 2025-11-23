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

export const TbArrowBadgeDownFilled = (props: IconProps) => {
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
        <Path d="M16.375 6.22 12 9.718l-4.375-3.5A1 1 0 0 0 6 7v6a1 1 0 0 0 .375.78l5 4a1 1 0 0 0 1.25 0l5-4A1 1 0 0 0 18 13V7a1 1 0 0 0-1.625-.78" />
      </G>
    </Svg>
  );
};