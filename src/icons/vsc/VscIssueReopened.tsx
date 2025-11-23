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

export const VscIssueReopened = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M5.28 5.656 2 7.006l-.66-.26L0 3.506l.92-.38.81 1.95a6.48 6.48 0 0 1 12.48 1.93h-1a5.48 5.48 0 0 0-10.64-1.28l2.32-1zm8.86 2.68 1.34 3.23-.92.44-.82-2a6.49 6.49 0 0 1-12.5-2h1v-.5a5.49 5.49 0 0 0 10.64 1.89l-2.25.93-.39-.92 3.25-1.35z" clipRule="evenodd" />
        <Circle cx={7.74} cy={7.54} r={1} />
      </G>
    </Svg>
  );
};