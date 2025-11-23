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

export const PiSolarPanelThin = (props: IconProps) => {
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
        <Path d="M36 104a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m38.26-48.08a4 4 0 1 0 5.66-5.66L68.6 39a4 4 0 0 0-5.6 5.6ZM128 36a4 4 0 0 0 4-4V16a4 4 0 0 0-8 0v16a4 4 0 0 0 4 4m50.91 21.09a4 4 0 0 0 2.83-1.17l11.31-11.32a4 4 0 1 0-5.65-5.6l-11.32 11.26a4 4 0 0 0 2.83 6.83M200 108h16a4 4 0 0 0 0-8h-16a4 4 0 0 0 0 8m-112 0a4 4 0 0 0 4-4 36 36 0 0 1 72 0 4 4 0 0 0 8 0 44 44 0 0 0-88 0 4 4 0 0 0 4 4m147.45 110a4 4 0 0 1-3.45 2H24a4 4 0 0 1-3.48-6l40.69-72a4 4 0 0 1 3.49-2h126.6a4 4 0 0 1 3.49 2l40.69 72a4 4 0 0 1-.03 4M189 148h-31.69l5.22 24h40Zm-34.63 24-5.22-24h-42.27l-5.22 24Zm-54.42 8-7 32H163l-7-32Zm-46.46-8h40l5.22-24H67Zm-22.6 40h53.89l7-32H48.94Zm194.28 0-18.08-32h-42.82l6.95 32Z" />
      </G>
    </Svg>
  );
};