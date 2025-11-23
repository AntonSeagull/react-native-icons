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

export const PiShuffleAngularThin = (props: IconProps) => {
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
        <Path d="M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188H168a4 4 0 0 1-3.25-1.67L85.94 76H32a4 4 0 0 1 0-8h56a4 4 0 0 1 3.25 1.67L170.06 180h52.28l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93L170.06 76h52.28l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68H168a4 4 0 0 0-3.25 1.67l-20.34 28.48a4 4 0 0 0 .93 5.58m-34.68 48.54a4 4 0 0 0-5.58.93L85.94 180H32a4 4 0 0 0 0 8h56a4 4 0 0 0 3.25-1.67l20.34-28.48a4 4 0 0 0-.93-5.58" />
      </G>
    </Svg>
  );
};