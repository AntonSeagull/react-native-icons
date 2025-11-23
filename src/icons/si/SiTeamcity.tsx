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

export const SiTeamcity = (props: IconProps) => {
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
        <Path d="M0 0v24h24V0zm2.664 2.964h7.48v1.832H7.396v7.196H5.412V4.796H2.664zm9.328 18h-9v-1.5h9zm5.564-9.218a4.6 4.6 0 0 1-2.036.374 4.556 4.556 0 0 1-4.628-4.616V7.48A4.584 4.584 0 0 1 15.6 2.812 4.66 4.66 0 0 1 19.16 4.2l-1.264 1.456a3.34 3.34 0 0 0-2.312-1.02 2.67 2.67 0 0 0-2.616 2.8v.028a2.68 2.68 0 0 0 2.616 2.836 3.23 3.23 0 0 0 2.376-1.056l1.264 1.276a4.6 4.6 0 0 1-1.668 1.226" />
      </G>
    </Svg>
  );
};