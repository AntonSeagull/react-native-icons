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

export const TfiShareAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.527 8.229 1.674 4.375 5.528.521l.707.707-2.647 2.647H6.5c3.032 0 5.5 2.467 5.5 5.5a5.52 5.52 0 0 1-1.747 4.021l-.682-.73A4.46 4.46 0 0 0 11 9.375c0-2.481-2.019-4.5-4.5-4.5H3.588l2.646 2.646zM16 9.025V15.5c0 .275-.225.5-.5.5h-14a.5.5 0 0 1-.5-.5V9.03H0v6.47c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.025z" />
      </G>
    </Svg>
  );
};