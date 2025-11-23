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

export const PiChatCenteredDotsThin = (props: IconProps) => {
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
        <Path d="M136 120a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8m56-56v128a12 12 0 0 1-12 12h-62.75l-14.83 26a12 12 0 0 1-20.84 0l-14.83-26H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h65.07a4 4 0 0 1 3.47 2l16 28a4 4 0 0 0 6.94 0l16-28a4 4 0 0 1 3.47-2H216a4 4 0 0 0 4-4Z" />
      </G>
    </Svg>
  );
};