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

export const FaFolderPlus = (props: IconProps) => {
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
        <Path d="M464 128H272l-64-64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V176a48 48 0 0 0-48-48M359.5 296a16 16 0 0 1-16 16h-64v64a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-64h-64a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h64v-64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v64h64a16 16 0 0 1 16 16Z" />
      </G>
    </Svg>
  );
};