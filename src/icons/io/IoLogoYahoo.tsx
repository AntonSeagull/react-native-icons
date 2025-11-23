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

export const IoLogoYahoo = (props: IconProps) => {
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
        <Path d="M0 139.009h97.648l56.86 145.729 57.6-145.729h95.066L164.022 484H68.337l39.189-91.417L.003 139.009zM417.5 256H311l94.907-228L512 28.005zm-78.208 21.221c32.672 0 59.156 26.533 59.156 59.258 0 32.727-26.484 59.26-59.156 59.26-32.667 0-59.146-26.533-59.146-59.26 0-32.725 26.483-59.258 59.146-59.258" />
      </G>
    </Svg>
  );
};