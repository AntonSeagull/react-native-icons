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

export const CiBoxes = (props: IconProps) => {
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
        <Path d="M19.435 11.5h-2.72V4.56a1.5 1.5 0 0 0-1.5-1.5h-6.43a1.5 1.5 0 0 0-1.5 1.5v6.94h-2.72a1.5 1.5 0 0 0-1.5 1.5v6.44a1.5 1.5 0 0 0 1.5 1.5H11a1.47 1.47 0 0 0 1-.39 1.5 1.5 0 0 0 1 .39h6.44a1.5 1.5 0 0 0 1.5-1.5V13a1.5 1.5 0 0 0-1.505-1.5M11.5 19.44a.5.5 0 0 1-.5.5H4.565a.5.5 0 0 1-.5-.5V13a.5.5 0 0 1 .5-.5h1.97v2a.5.5 0 0 0 .5.5h1.5a.51.51 0 0 0 .5-.5v-2H11.5ZM8.285 11.5V4.56a.5.5 0 0 1 .5-.5h1.96v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5v6.94Zm11.65 7.94a.51.51 0 0 1-.5.5H13a.51.51 0 0 1-.5-.5V12.5h2.47v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5Z" />
      </G>
    </Svg>
  );
};