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

export const PiTreasureChestThin = (props: IconProps) => {
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
        <Path d="M184 44H72a52.06 52.06 0 0 0-52 52v96a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V96a52.06 52.06 0 0 0-52-52m44 52v12h-40V52.19A44.06 44.06 0 0 1 228 96m-88 44h-24v-40h24Zm-28 8h32a4 4 0 0 0 4-4v-28h32v80H76v-80h32v28a4 4 0 0 0 4 4m36-40V96a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v12H76V52h104v56ZM68 52.19V108H28V96a44.06 44.06 0 0 1 40-43.81M28 192v-76h40v80H32a4 4 0 0 1-4-4m196 4h-36v-80h40v76a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};