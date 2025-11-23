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

export const PiThreeDFill = (props: IconProps) => {
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
        <Path d="M184 128a32 32 0 0 1-32 32h-8V96h8a32 32 0 0 1 32 32m48-72v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-120 88a32 32 0 0 0-18.31-28.92L110.4 92.8A8 8 0 0 0 104 80H64a8 8 0 0 0 0 16h24l-14.4 19.2A8 8 0 0 0 80 128a16 16 0 1 1-10.66 27.93 8 8 0 1 0-10.68 11.92A32 32 0 0 0 112 144m88-16a48.05 48.05 0 0 0-48-48h-16a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h16a48.05 48.05 0 0 0 48-48" />
      </G>
    </Svg>
  );
};