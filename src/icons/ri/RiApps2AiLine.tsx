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

export const RiApps2AiLine = (props: IconProps) => {
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
        <Path d="M2.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m-3-10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.975-5.845.278-.636a4.9 4.9 0 0 1 2.496-2.533l.854-.38c.463-.205.463-.878 0-1.083l-.806-.359a4.9 4.9 0 0 1-2.533-2.617l-.285-.688a.57.57 0 0 0-1.058 0l-.285.688a4.9 4.9 0 0 1-2.533 2.617l-.806.359c-.463.205-.463.878 0 1.083l.854.38a4.9 4.9 0 0 1 2.496 2.533l.278.636a.57.57 0 0 0 1.05 0" />
      </G>
    </Svg>
  );
};