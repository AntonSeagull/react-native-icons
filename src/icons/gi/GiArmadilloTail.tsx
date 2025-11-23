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

export const GiArmadilloTail = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M126.75 21.563 115.344 72.28l115.687 58.97 92.407-109.688H126.75zm-111 .593V60.28l81.438 7.69L107.5 22.155zM321.375 53l-74.313 88.188 65.5 56.187 105.813-67.03zM15.75 79.03v91.407c120.73-24.94 305.18 81.97 378.5 237.188l-1.406-45.75-32.813-74.03-52.592-70.283-1.782-1.53-74.062-63.5-2.438-1.25L103.75 87.343zm386.78 83.5-76.624 48.5 45.78 61.19 93.783-34.283-62.94-75.406zm49.97 100.064-71.656 26.156 27.312 61.594 77.375-2.72zm11.53 104.47-52.28 1.842 2.875 93.188a312 312 0 0 1 7.875 36.625c33.85-37.927 45.03-83.554 41.53-131.658z" />
      </G>
    </Svg>
  );
};