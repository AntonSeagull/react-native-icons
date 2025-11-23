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

export const PiReplitLogoFill = (props: IconProps) => {
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
        <Path d="M72 160h72v56a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16m56-136H72a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h72V40a16 16 0 0 0-16-16m88 72h-72v64h72a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};