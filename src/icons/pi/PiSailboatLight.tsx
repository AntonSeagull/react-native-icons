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

export const PiSailboatLight = (props: IconProps) => {
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
        <Path d="M245.41 173.4A6 6 0 0 0 240 170h-98v-28h74a6 6 0 0 0 4.44-10L142 45.68V8a6 6 0 0 0-10.66-3.78l-104 128A6 6 0 0 0 32 142h98v28H16a6 6 0 0 0-4.69 9.75l29.6 37A14 14 0 0 0 51.84 222h152.32a14 14 0 0 0 10.93-5.25l29.6-37a6 6 0 0 0 .72-6.35m-43-43.4H142V63.52Zm-157.8 0L130 24.9V130Zm161.11 79.25a2 2 0 0 1-1.56.75H51.84a2 2 0 0 1-1.56-.75L28.48 182h199Z" />
      </G>
    </Svg>
  );
};