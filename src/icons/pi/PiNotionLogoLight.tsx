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

export const PiNotionLogoLight = (props: IconProps) => {
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
        <Path d="M216 42h-48a6 6 0 0 0 0 12h18v130.64L109.26 45.11A6 6 0 0 0 104 42H40a6 6 0 0 0 0 12h18v148H40a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12H70V71.36l76.74 139.53A6 6 0 0 0 152 214h40a6 6 0 0 0 6-6V54h18a6 6 0 0 0 0-12M74.15 54h26.3l81.4 148h-26.3Z" />
      </G>
    </Svg>
  );
};