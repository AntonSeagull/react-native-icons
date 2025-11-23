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

export const AiOutlineHarmonyOS = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M511.5 65C719.987 65 889 234.013 889 442.5S719.987 820 511.5 820 134 650.987 134 442.5 303.013 65 511.5 65m0 64C338.359 129 198 269.359 198 442.5S338.359 756 511.5 756 825 615.641 825 442.5 684.641 129 511.5 129M745 889v72H278v-72z" />
      </G>
    </Svg>
  );
};