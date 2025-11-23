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

export const GiAncientColumns = (props: IconProps) => {
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
        <Path d="M57 39v16h110V39zm32 34v318h46V73zm334 21.56-46 23.04V391h46zM254.2 187 233 197.6V391h46V211.7zM73 409v30h78v-30zm144 0v30h78v-30zm144 0v30h78v-30zM38.49 457l-10 30H483.5l-10-30z" />
      </G>
    </Svg>
  );
};