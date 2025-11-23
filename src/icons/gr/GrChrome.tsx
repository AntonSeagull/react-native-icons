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

export const GrChrome = (props: IconProps) => {
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
        <Path fill="#4285F4" d="M11.973 16.414A4.32 4.32 0 0 1 7.66 12.1a4.32 4.32 0 0 1 4.314-4.315 4.32 4.32 0 0 1 4.315 4.315 4.32 4.32 0 0 1-4.315 4.314" />
        <Path fill="#4AAE48" d="M13.791 17.181a5.507 5.507 0 0 1-5.38-.926 5.5 5.5 0 0 1-1.718-2.505l-.002-.006L1.936 5.51a11.9 11.9 0 0 0-1.706 8.84 11.9 11.9 0 0 0 5.08 7.627 11.9 11.9 0 0 0 4.557 1.84z" />
        <Path fill="#EA3939" d="M22.76 6.707a12.08 12.08 0 0 0-20.185-2.25l4.016 6.956a5.39 5.39 0 0 1 5.274-4.706z" />
        <Path fill="#FED14B" d="M11.926 24c3.01 0 5.891-1.129 8.11-3.178a11.93 11.93 0 0 0 3.816-7.893 12.05 12.05 0 0 0-.744-5.144h-7.856a5.5 5.5 0 0 1 2.09 4.34 5.53 5.53 0 0 1-1.182 3.381l-5.008 8.47q.388.024.774.024" />
      </G>
    </Svg>
  );
};