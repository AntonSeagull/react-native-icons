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

export const PiPerspectiveFill = (props: IconProps) => {
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
        <Path d="M248 136a8 8 0 0 1-8 8h-16v64a16 16 0 0 1-16 16 16.5 16.5 0 0 1-2.87-.26l-160-29.09A16 16 0 0 1 32 178.91V144H16a8 8 0 0 1 0-16h224a8 8 0 0 1 8 8M36 112h184a4 4 0 0 0 4-4V48.42a16.48 16.48 0 0 0-4.07-11.08 16 16 0 0 0-14.79-5.08l-160 29.09A16 16 0 0 0 32 77.09V108a4 4 0 0 0 4 4" />
      </G>
    </Svg>
  );
};