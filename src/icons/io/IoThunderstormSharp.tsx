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

export const IoThunderstormSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9 153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1" />
        <Path d="m74.53 407.177 38.32-76.622 28.62 14.313-38.32 76.623zM98.52 471.189l30.318-60.622 28.62 14.313-30.317 60.622zM354.541 407.189l38.32-76.623 28.62 14.314-38.32 76.622zM378.542 471.2l30.317-60.622 28.62 14.314-30.317 60.621z" />
      </G>
    </Svg>
  );
};