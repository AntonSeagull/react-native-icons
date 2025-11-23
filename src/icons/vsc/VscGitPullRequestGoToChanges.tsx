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

export const VscGitPullRequestGoToChanges = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M3 10v4l1 1h9l1-1V5l-.29-.71-3-3L10 1H8v1h2l3 3v9H4v-4zm8-4H9V4H8v2H6v1h2v2h1V7h2zm-5 5h5v1H6z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M7.06 3.854 4.915 6l-.707-.707L5.5 4h-3a1.5 1.5 0 0 0 0 3H3v1h-.5a2.5 2.5 0 1 1 0-5h3L4.207 1.707 4.914 1l2.147 2.146z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};