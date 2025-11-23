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

export const TfiAnnouncement = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16.469 2.222h-1.927a.527.527 0 0 0-.531.521v.667L3.016 7.44v-.27a.79.79 0 0 0-.797-.781H.797A.79.79 0 0 0 0 7.17v4.688c0 .429.358.781.797.781h1.422a.79.79 0 0 0 .797-.781v-.331l1.034.189a3.5 3.5 0 0 0-.038.491c0 1.897 1.561 3.441 3.479 3.441a3.44 3.44 0 0 0 3.38-2.682l3.14.576v.659c0 .287.239.521.531.521h1.927a.527.527 0 0 0 .531-.521V2.743a.527.527 0 0 0-.531-.521M7.491 14.648c-1.367 0-2.479-1.095-2.479-2.441 0-.104.027-.205.04-.308l4.84.888a2.45 2.45 0 0 1-2.401 1.861M16 13.722h-.989v-1.013L2.016 10.326v1.312H1v-4.25h1.016v1.484l12.995-4.763v-.887H16z" />
      </G>
    </Svg>
  );
};