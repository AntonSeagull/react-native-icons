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

export const PiListHeartThin = (props: IconProps) => {
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
        <Path d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h64a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m80 56H40a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m124-44c0 14.51-8.56 29-25.44 43.07a143.5 143.5 0 0 1-24.77 16.51 4 4 0 0 1-3.58 0 143.5 143.5 0 0 1-24.77-16.51C148.56 173 140 158.51 140 144a28 28 0 0 1 52-14.41A28 28 0 0 1 244 144m-8 0a20 20 0 0 0-40 0 4 4 0 0 1-8 0 20 20 0 0 0-40 0c0 25.8 35.54 46.83 44 51.47 8.46-4.64 44-25.67 44-51.47" />
      </G>
    </Svg>
  );
};