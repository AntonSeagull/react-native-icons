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

export const PiMicrosoftWordLogoLight = (props: IconProps) => {
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
        <Path d="M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-42 76h44v52h-44ZM70 40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v50h-44V80a14 14 0 0 0-14-14H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m162 42H72a2 2 0 0 1-2-2v-26h74a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2M70.18 153.46l-12-48a6 6 0 1 1 11.64-2.92l8.07 32.27 8.74-17.49a6 6 0 0 1 10.74 0l8.74 17.49 8.07-32.27a6 6 0 1 1 11.64 2.92l-12 48a6 6 0 0 1-5.17 4.5 5 5 0 0 1-.65 0 6 6 0 0 1-5.37-3.32L92 133.42l-10.63 21.26a6 6 0 0 1-11.19-1.22" />
      </G>
    </Svg>
  );
};