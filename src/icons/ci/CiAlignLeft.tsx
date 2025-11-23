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

export const CiAlignLeft = (props: IconProps) => {
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
        <Path d="M3.078 3.548v16.9a.5.5 0 0 0 1 0v-16.9a.5.5 0 0 0-1 0M18.422 11.5H7.582a2.5 2.5 0 0 1-2.5-2.5V6.565a2.5 2.5 0 0 1 2.5-2.5h10.84a2.5 2.5 0 0 1 2.5 2.5V9a2.5 2.5 0 0 1-2.5 2.5M7.582 5.065a1.5 1.5 0 0 0-1.5 1.5V9a1.5 1.5 0 0 0 1.5 1.5h10.84a1.5 1.5 0 0 0 1.5-1.5V6.565a1.5 1.5 0 0 0-1.5-1.5ZM13.451 19.938H7.582a2.5 2.5 0 0 1-2.5-2.5V15a2.5 2.5 0 0 1 2.5-2.5h5.869a2.5 2.5 0 0 1 2.5 2.5v2.436a2.5 2.5 0 0 1-2.5 2.502M7.582 13.5a1.5 1.5 0 0 0-1.5 1.5v2.436a1.5 1.5 0 0 0 1.5 1.5h5.869a1.5 1.5 0 0 0 1.5-1.5V15a1.5 1.5 0 0 0-1.5-1.5Z" />
      </G>
    </Svg>
  );
};