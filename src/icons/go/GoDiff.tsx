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

export const GoDiff = (props: IconProps) => {
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
        <Path d="M12.25 3.5a.75.75 0 0 1 .75.75V8.5h4.25a.75.75 0 0 1 0 1.5H13v4.25a.75.75 0 0 1-1.5 0V10H7.25a.75.75 0 0 1 0-1.5h4.25V4.25a.75.75 0 0 1 .75-.75M6.562 19.25a.75.75 0 0 1 .75-.75h9.938a.75.75 0 0 1 0 1.5H7.312a.75.75 0 0 1-.75-.75" />
      </G>
    </Svg>
  );
};