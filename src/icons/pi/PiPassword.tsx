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

export const PiPassword = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M48 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m92 54.5-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.5a8 8 0 0 0-5 15.22l20 6.49-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17 12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17 20-6.49A8 8 0 0 0 140 110.5m106 5.14a8 8 0 0 0-10-5.14l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.49a8 8 0 0 0-4.95 15.22l20 6.49-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17 12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17 20-6.49a8 8 0 0 0 5.07-10.09" />
      </G>
    </Svg>
  );
};