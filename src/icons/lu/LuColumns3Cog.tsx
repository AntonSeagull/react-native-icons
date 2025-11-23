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

export const LuColumns3Cog = (props: IconProps) => {
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
        <Path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5M14.3 19.6l1-.4M15 3v7.5M15.2 16.9l-.9-.3M16.6 21.7l.3-.9M16.8 15.3l-.4-1M19.1 15.2l.3-.9M19.6 21.7l-.4-1M20.7 16.8l1-.4M21.7 19.4l-.9-.3M9 3v18" />
        <Circle cx={18} cy={18} r={3} />
      </G>
    </Svg>
  );
};