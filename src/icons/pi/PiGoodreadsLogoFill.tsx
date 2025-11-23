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

export const PiGoodreadsLogoFill = (props: IconProps) => {
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
        <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-24 136a48 48 0 0 1-86.4 28.8 8 8 0 1 1 12.8-9.6A32 32 0 0 0 160 160v-12.26A48 48 0 0 1 80 112v-8a48 48 0 0 1 80-35.74V64a8 8 0 0 1 16 0Zm-16-56v8a32 32 0 0 1-64 0v-8a32 32 0 0 1 64 0" />
      </G>
    </Svg>
  );
};