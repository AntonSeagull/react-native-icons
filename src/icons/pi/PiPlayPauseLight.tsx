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

export const PiPlayPauseLight = (props: IconProps) => {
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
        <Path d="M182 64v128a6 6 0 0 1-12 0V64a6 6 0 0 1 12 0m42-6a6 6 0 0 0-6 6v128a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6m-82 70a13.77 13.77 0 0 1-6.41 11.65L47.41 195.8A13.91 13.91 0 0 1 26 184.15V71.85A13.91 13.91 0 0 1 47.41 60.2l88.18 56.15A13.77 13.77 0 0 1 142 128m-12 0a1.77 1.77 0 0 0-.85-1.53L41 70.32a1.87 1.87 0 0 0-1-.32 2.1 2.1 0 0 0-1 .25 1.76 1.76 0 0 0-1 1.6v112.3a1.76 1.76 0 0 0 1 1.6 1.9 1.9 0 0 0 2-.07l88.19-56.15A1.77 1.77 0 0 0 130 128" />
      </G>
    </Svg>
  );
};