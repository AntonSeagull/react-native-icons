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

export const PiHardHatThin = (props: IconProps) => {
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
        <Path d="M224 156h-4v-20a92.35 92.35 0 0 0-64-87.65V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v8.35A92.35 92.35 0 0 0 36 136v20h-4a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12m-12-20v20h-56V56.8a84.33 84.33 0 0 1 56 79.2M112 36h32a4 4 0 0 1 4 4v116h-40V40a4 4 0 0 1 4-4M44 136a84.33 84.33 0 0 1 56-79.2V156H44Zm184 56a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4v-24a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};