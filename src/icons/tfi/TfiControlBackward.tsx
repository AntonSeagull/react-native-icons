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

export const TfiControlBackward = (props: IconProps) => {
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
        <Path d="M6.719 8.474 14 14.571V2.436zM13 12.429 8.281 8.478 13 4.564zM3.281 8.478l5.54 4.639-.643.768-6.46-5.41L8.18 3.117l.639.77z" />
      </G>
    </Svg>
  );
};