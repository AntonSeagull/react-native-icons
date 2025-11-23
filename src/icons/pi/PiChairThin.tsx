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

export const PiChairThin = (props: IconProps) => {
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
        <Path d="M208 140h-36v-40h20a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h20v40H48a12 12 0 0 0-12 12v16a12 12 0 0 0 12 12h12v44a4 4 0 0 0 8 0v-44h120v44a4 4 0 0 0 8 0v-44h12a12 12 0 0 0 12-12v-16a12 12 0 0 0-12-12M60 88V40a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4m32 12h72v40H92Zm120 68a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};