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

export const SiNeovim = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2.214 4.954v13.615L7.655 24V10.314L3.312 3.845zm4.999 17.98-4.557-4.548V5.136l.59-.596 3.967 5.908v12.485zm14.573-4.457-.862.937-4.24-6.376V0l5.068 5.092zM7.431.001l12.998 19.835-3.637 3.637L3.787 3.683 7.43 0z" />
      </G>
    </Svg>
  );
};