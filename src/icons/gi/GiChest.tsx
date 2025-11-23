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

export const GiChest = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M58.553 89 42.27 211.8H79V89zM97 89v122.8h38V89zm56 0v122.8h56.666v-17.6h92.668v17.6H359V89zm224 0v122.8h38V89zm56 0v122.8h36.73L453.446 89zM227.666 212.2v105.2h56.668V212.2zM256 223.794a18.667 16.103 0 0 1 18.666 16.1 18.667 16.103 0 0 1-9.666 14.09v37.214h-18V254a18.667 16.103 0 0 1-9.666-14.106 18.667 16.103 0 0 1 18.666-16.1M41 229.8v127.915l19.334 18.23V229.8zm37.334 0v158h355.332v-158H302.334v105.6h-92.668V229.8zm373.332 0v146.145L471 357.715V229.8zM41 382.456V423h43.002L41 382.455zm430 0L427.998 423H471v-40.545zM92 405.8l18.24 17.2h291.52L420 405.8z" />
      </G>
    </Svg>
  );
};