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

export const PiHighDefinitionThin = (props: IconProps) => {
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
        <Path d="M176 76h-24a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h24a52 52 0 0 0 0-104m0 96h-20V84h20a44 44 0 0 1 0 88m-60 4v-44H52v44a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0v44h64V80a4 4 0 0 1 8 0v96a4 4 0 0 1-8 0M28 48a4 4 0 0 1 4-4h192a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m200 160a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h192a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};