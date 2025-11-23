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

export const TfiMobile = (props: IconProps) => {
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
        <Path d="M12.5 0h-8C3.673 0 3 .673 3 1.5v14c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5m-8 1h8a.5.5 0 0 1 .5.5V3H4V1.5a.5.5 0 0 1 .5-.5M13 4v8H4V4zm-.5 12h-8a.5.5 0 0 1-.5-.5V13h9v2.5a.5.5 0 0 1-.5.5M9 14.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
      </G>
    </Svg>
  );
};