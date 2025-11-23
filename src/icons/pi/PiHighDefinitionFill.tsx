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

export const PiHighDefinitionFill = (props: IconProps) => {
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
        <Path d="M196 128a32 32 0 0 1-32 32h-12V96h12a32 32 0 0 1 32 32m36-72v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M120 88a8 8 0 0 0-16 0v32H64V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm92 40a48.05 48.05 0 0 0-48-48h-20a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h20a48.05 48.05 0 0 0 48-48" />
      </G>
    </Svg>
  );
};