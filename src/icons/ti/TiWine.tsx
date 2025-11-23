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

export const TiWine = (props: IconProps) => {
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
        <Path d="M17.568 9.432c0-2.55-.906-5.592-.944-5.72A1 1 0 0 0 15.666 3H8.334c-.441 0-.83.289-.958.712-.038.128-.944 3.17-.944 5.72 0 2.735 1.984 5.011 4.587 5.477L11 15v4h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4l-.019-.092c2.603-.466 4.587-2.741 4.587-5.476M12 13a3.565 3.565 0 0 1-3.511-3h7.021A3.56 3.56 0 0 1 12 13M8.445 9c.062-1.468.422-3.093.653-4h5.803c.231.907.591 2.532.653 4z" />
      </G>
    </Svg>
  );
};