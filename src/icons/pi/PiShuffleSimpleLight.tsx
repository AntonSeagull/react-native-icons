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

export const PiShuffleSimpleLight = (props: IconProps) => {
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
        <Path d="M214 48v40a6 6 0 0 1-12 0V62.48l-47.13 47.14a6 6 0 0 1-8.49-8.49L193.52 54H168a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m-6 114a6 6 0 0 0-6 6v25.52L52.24 43.76a6 6 0 0 0-8.48 8.48L193.52 202H168a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6v-40a6 6 0 0 0-6-6m-106.87-15.62-57.37 57.38a6 6 0 1 0 8.48 8.48l57.38-57.37a6 6 0 0 0-8.49-8.49" />
      </G>
    </Svg>
  );
};