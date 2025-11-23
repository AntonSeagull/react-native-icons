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

export const PiSpeakerLowFill = (props: IconProps) => {
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
        <Path d="M160 32.25v191.44a8.29 8.29 0 0 1-3.91 7.18 8 8 0 0 1-9-.56l-65.57-51a4 4 0 0 1-1.52-3.15V79.84a4 4 0 0 1 1.55-3.15l65.57-51a8 8 0 0 1 10 .16 8.27 8.27 0 0 1 2.88 6.4M60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4m138 21.56a8 8 0 1 0-12 10.58 24 24 0 0 1 0 31.72 8 8 0 1 0 12 10.58 40 40 0 0 0 0-52.88" />
      </G>
    </Svg>
  );
};