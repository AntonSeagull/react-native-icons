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

export const GoDiffAdded = (props: IconProps) => {
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
        <Path d="M12.75 7a.75.75 0 0 0-1.5 0v4.25H7a.75.75 0 0 0 0 1.5h4.25V17a.75.75 0 0 0 1.5 0v-4.25H17a.75.75 0 0 0 0-1.5h-4.25z" />
        <Path d="M3.75 2A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 20.25V3.75A1.75 1.75 0 0 0 20.25 2zM3.5 3.75a.25.25 0 0 1 .25-.25h16.5a.25.25 0 0 1 .25.25v16.5a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25z" />
      </G>
    </Svg>
  );
};