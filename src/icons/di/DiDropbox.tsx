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

export const DiDropbox = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="m4.79 17.467 6.595 4.304 4.616-3.849-6.65-4.104zm6.595-11.602L4.79 10.166l4.56 3.651L16 9.712zm15.825 4.301-6.595-4.301L16 9.713l6.649 4.105zM16 17.922l4.615 3.849 6.595-4.304-4.56-3.65zm.014.828-4.629 3.839-1.981-1.294v1.451l6.609 3.961 6.609-3.961v-1.451l-1.981 1.294z" />
      </G>
    </Svg>
  );
};