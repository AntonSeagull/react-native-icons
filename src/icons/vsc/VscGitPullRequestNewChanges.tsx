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

export const VscGitPullRequestNewChanges = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m13.71 4.29-3-3L10 1H4L3 2v12l1 1h5.354a4 4 0 0 1-.819-1H4V2h6l3 3v3.126q.534.138 1 .41V5zM8.126 11H6v1h2q.002-.519.126-1M6 6h2V4h1v2h2v1H9v2H8V7H6z" clipRule="evenodd" />
        <Path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
      </G>
    </Svg>
  );
};