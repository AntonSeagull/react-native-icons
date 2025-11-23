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

export const SiLastpass = (props: IconProps) => {
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
        <Path d="M22.629 6.857c0-.379.304-.686.686-.686.378 0 .685.312.685.686v10.286a.684.684 0 0 1-.686.686.69.69 0 0 1-.686-.686V6.857zM2.057 10.286a2.057 2.057 0 1 1 0 4.114 2.057 2.057 0 0 1 0-4.114m7.543 0a2.057 2.057 0 1 1 0 4.114 2.057 2.057 0 0 1 0-4.114m7.543 0a2.057 2.057 0 1 1 0 4.114 2.057 2.057 0 0 1 0-4.114" />
      </G>
    </Svg>
  );
};