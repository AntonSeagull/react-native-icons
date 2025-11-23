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

export const CgMenuGridR = (props: IconProps) => {
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
        <Path fill="currentColor" d="M4 4h4v4H4zM4 10h4v4H4zM8 16H4v4h4zM10 4h4v4h-4zM14 10h-4v4h4zM10 16h4v4h-4zM20 4h-4v4h4zM16 10h4v4h-4zM20 16h-4v4h4z" />
      </G>
    </Svg>
  );
};