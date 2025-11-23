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

export const LiaFeatherAltSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M27 4c-8.803 0-13.201 4.795-15.314 7.1l-3.05 3.076A8.93 8.93 0 0 0 6 20.539V22l2.027-2.027a6.94 6.94 0 0 1 2.02-4.381l3.113-3.14c1.836-2.003 5.569-6.074 12.815-6.429-.222 4.522-1.89 7.674-3.598 9.852L19 17h2.418a30 30 0 0 1-1.87 1.84l-.98.97L15 21h2.367l-.957.947a6.95 6.95 0 0 1-4.95 2.051H9.417l9.291-9.291-1.414-1.414L4 26.586 5.414 28l2.002-2.002h4.045a8.94 8.94 0 0 0 6.367-2.64l3.07-3.046C23.203 18.203 28 13.805 28 5V4z" />
      </G>
    </Svg>
  );
};