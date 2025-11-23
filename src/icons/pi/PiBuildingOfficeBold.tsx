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

export const PiBuildingOfficeBold = (props: IconProps) => {
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
        <Path d="M244 204h-12V99.3a12 12 0 0 0-4-23.3h-40V51.3a12 12 0 0 0-4-23.3H40a12 12 0 0 0-4 23.3V204H24a12 12 0 0 0 0 24h220a12 12 0 0 0 0-24m-36-104v104h-20V100ZM60 52h104v152h-16v-44a12 12 0 0 0-12-12H88a12 12 0 0 0-12 12v44H60Zm64 152h-24v-32h24ZM72 80a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m-48 40a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};