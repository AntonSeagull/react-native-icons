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

export const PiExcludeSquareThin = (props: IconProps) => {
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
        <Path d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4m-54.34 120-48-48h44.68l48 48ZM44 49.66l48 48v44.68l-48-48ZM94.34 44l48 48H97.66l-48-48ZM100 156v-56h56v56Zm64 2.34v-44.68l48 48v44.68ZM212 100v50.34l-48-48V100Zm-56-8h-2.34l-48-48H156ZM44 156v-50.34l48 48V156Zm56 8h2.34l48 48H100Z" />
      </G>
    </Svg>
  );
};