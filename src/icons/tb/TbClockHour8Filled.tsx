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

export const TbClockHour8Filled = (props: IconProps) => {
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
        <Path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1v4.464l-2.555 1.704a1 1 0 0 0-.336 1.286l.059.1a1 1 0 0 0 1.387.278l3.027-2.018.087-.07.074-.075.075-.094.052-.08.035-.07.051-.132.031-.135.01-.082L13 12V7a1 1 0 0 0-1-1" />
      </G>
    </Svg>
  );
};