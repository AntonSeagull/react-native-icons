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

export const MdOutlineDoDisturbOff = (props: IconProps) => {
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
        <Path d="M12 4c4.41 0 8 3.59 8 8 0 1.41-.37 2.73-1.01 3.88l1.46 1.46A9.96 9.96 0 0 0 22 12c0-5.52-4.48-10-10-10a9.9 9.9 0 0 0-5.33 1.55l1.46 1.46A7.9 7.9 0 0 1 12 4m5 7h-2.88l2 2H17zM2.41 2.13 1 3.54l2.78 2.78A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.41-1.41zM12 20c-4.41 0-8-3.59-8-8 0-1.56.45-3 1.23-4.23L8.46 11H7v2h3.46l5.77 5.77A7.85 7.85 0 0 1 12 20" />
      </G>
    </Svg>
  );
};