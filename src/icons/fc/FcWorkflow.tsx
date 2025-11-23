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

export const FcWorkflow = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#00BCD4" d="M7 31h10v10H7zM35.3 19.3l-5.6-5.6c-.4-.4-.4-1 0-1.4l5.6-5.6c.4-.4 1-.4 1.4 0l5.6 5.6c.4.4.4 1 0 1.4l-5.6 5.6c-.4.4-1 .4-1.4 0" />
        <Circle cx={12} cy={13} r={6} fill="#3F51B5" />
        <Circle cx={36} cy={36} r={6} fill="#448AFF" />
        <Path d="M11 24h2v5h-2z" />
        <Path d="m12 21-3 4h6z" />
        <Path d="M20 12h5v2h-5z" />
        <Path d="m28 13-4-3v6z" />
        <Path d="M35 21h2v5h-2z" />
        <Path d="m36 29 3-4h-6z" />
      </G>
    </Svg>
  );
};