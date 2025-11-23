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

export const PiCircuitryFill = (props: IconProps) => {
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
        <Path d="m88 111.31 48 48V220a4 4 0 0 1-4 4H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h20a4 4 0 0 1 4 4v117.38a24 24 0 1 0 16 0ZM80 184a8 8 0 1 0-8-8 8 8 0 0 0 8 8m104-80a8 8 0 1 0-8 8 8 8 0 0 0 8-8m24-72h-52a4 4 0 0 0-4 4v32.69l13.66 13.66a24 24 0 1 1-11.31 11.31l-16-16A8 8 0 0 1 136 72V36a4 4 0 0 0-4-4H92a4 4 0 0 0-4 4v52.69l61.66 61.65A8 8 0 0 1 152 156v64a4 4 0 0 0 4 4h52a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};