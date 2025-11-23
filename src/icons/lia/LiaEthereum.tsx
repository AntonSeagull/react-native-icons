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

export const LiaEthereum = (props: IconProps) => {
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
        <Path d="M14.953 3 6.93 15.553l9.074 4.46 8.93-4.464L17.053 3h-2.1M15 6.637v4.351l-3.914 1.776zm2 .04 3.818 6.08L17 11.005zm-2 6.507v4.107l-4.344-2.137zm2 .023 4.246 1.95L17 17.278zM7 17.512v2.52l7.928 8.843h2.144L25 20.031v-2.52l-9 4.614zm4.521 4.566L15 23.861v2.096zm8.958 0L17 25.957v-2.096z" />
      </G>
    </Svg>
  );
};