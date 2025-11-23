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

export const TbArrowBadgeRightFilled = (props: IconProps) => {
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
        <Path d="m7 6-.112.006a1 1 0 0 0-.669 1.619L9.72 12l-3.5 4.375A1 1 0 0 0 7 18h6a1 1 0 0 0 .78-.375l4-5a1 1 0 0 0 0-1.25l-4-5A1 1 0 0 0 13 6z" />
      </G>
    </Svg>
  );
};