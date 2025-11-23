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

export const GiFilmStrip = (props: IconProps) => {
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
        <Path d="M55 18v476h18v-37h46v37h274v-37h46v37h18V18h-18v37h-46V18h-18v60H137V18h-18v37H73V18zm18 55h46v46H73zm320 0h46v46h-46zm-256 41h238v156H137zm-64 23h46v46H73zm320 0h46v46h-46zM73 201h46v46H73zm320 0h46v46h-46zM73 265h46v46H73zm320 0h46v46h-46zm-256 41h238v156H137zm-64 23h46v46H73zm320 0h46v46h-46zM73 393h46v46H73zm320 0h46v46h-46z" />
      </G>
    </Svg>
  );
};