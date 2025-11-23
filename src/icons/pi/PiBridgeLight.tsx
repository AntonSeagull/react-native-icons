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

export const PiBridgeLight = (props: IconProps) => {
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
        <Path d="M232 162h-34V95.28a69.8 69.8 0 0 0 31.75 25.63 6 6 0 1 0 4.5-11.12A57.8 57.8 0 0 1 198 56a6 6 0 0 0-12 0 58 58 0 0 1-116 0 6 6 0 0 0-12 0 57.8 57.8 0 0 1-36.25 53.79 6 6 0 1 0 4.5 11.12A69.8 69.8 0 0 0 58 95.28V162H24a6 6 0 0 0 0 12h34v26a6 6 0 0 0 12 0v-26h116v26a6 6 0 0 0 12 0v-26h34a6 6 0 0 0 0-12m-86-38.35V162h-36v-38.35a70.1 70.1 0 0 0 36 0m-76-28.5a70.5 70.5 0 0 0 28 24.09V162H70ZM158 162v-42.76a70.5 70.5 0 0 0 28-24.09V162Z" />
      </G>
    </Svg>
  );
};