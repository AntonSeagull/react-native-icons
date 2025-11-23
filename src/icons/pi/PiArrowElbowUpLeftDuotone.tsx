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

export const PiArrowElbowUpLeftDuotone = (props: IconProps) => {
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
        <Path d="M96 32v96L48 80Z" opacity={0.2} />
        <Path d="M192 72h-88V32a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 104 128V88h80v136a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8M88 108.69 59.31 80 88 51.31Z" />
      </G>
    </Svg>
  );
};