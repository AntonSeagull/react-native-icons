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

export const PiQuestionMarkThin = (props: IconProps) => {
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
        <Path d="M188 96c0 27.51-24.77 50.09-56 51.89V160a4 4 0 0 1-8 0v-16a4 4 0 0 1 4-4c28.67 0 52-19.74 52-44s-23.33-44-52-44-52 19.74-52 44a4 4 0 0 1-8 0c0-28.67 26.92-52 60-52s60 23.33 60 52m-60 100a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};