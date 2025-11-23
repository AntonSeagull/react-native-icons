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

export const CgLayoutGridSmall = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7 7h2v2H7zM11 7h2v2h-2zM17 7h-2v2h2zM7 11h2v2H7zM13 11h-2v2h2zM15 11h2v2h-2zM9 15H7v2h2zM11 15h2v2h-2zM17 15h-2v2h2z" />
      </G>
    </Svg>
  );
};