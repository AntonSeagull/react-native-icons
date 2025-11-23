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

export const SiAnycubic = (props: IconProps) => {
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
        <Path d="m6.762.534 8.728 3.481 8.469 7.449-6.494-.631zm10.72 10.463 6.518.581-7.826 8.749-8.649 3.139zM6.592.601l10.699 10.331L7.355 23.44 0 12.465z" />
      </G>
    </Svg>
  );
};