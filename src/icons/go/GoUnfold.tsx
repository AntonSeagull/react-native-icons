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

export const GoUnfold = (props: IconProps) => {
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
        <Path d="M12 23a.75.75 0 0 1-.53-.22l-3.25-3.25a.749.749 0 0 1 .326-1.275.75.75 0 0 1 .734.215L12 21.19l2.72-2.72a.749.749 0 0 1 1.275.326.75.75 0 0 1-.215.734l-3.25 3.25A.75.75 0 0 1 12 23" />
        <Path d="M11.47 1.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-.018 1.042.75.75 0 0 1-1.042.018L12 2.81 9.28 5.53a.75.75 0 0 1-1.042-.018.75.75 0 0 1-.018-1.042ZM12 22.25a.75.75 0 0 1-.75-.75v-5.75a.75.75 0 0 1 1.5 0v5.75a.75.75 0 0 1-.75.75M2.75 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75" />
        <Path d="M12 1.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 12 1.5" />
      </G>
    </Svg>
  );
};