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

export const PiChatCenteredDots = (props: IconProps) => {
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
        <Path d="M116 120a12 12 0 1 1 12 12 12 12 0 0 1-12-12m-32 12a12 12 0 1 0-12-12 12 12 0 0 0 12 12m88 0a12 12 0 1 0-12-12 12 12 0 0 0 12 12m60-76v128a16 16 0 0 1-16 16h-60.43l-13.68 23.94a16 16 0 0 1-27.78 0L100.43 200H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-16 0H40v128h65.07a8 8 0 0 1 7 4l16 28 16-28a8 8 0 0 1 7-4H216Z" />
      </G>
    </Svg>
  );
};