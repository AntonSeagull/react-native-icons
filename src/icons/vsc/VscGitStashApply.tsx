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

export const VscGitStashApply = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M7 3.207V5h1V3.207l2.647 2.647.707-.708-3.5-3.5h-.707l-3.5 3.5.707.708z" clipRule="evenodd" />
        <Path d="m1.5 9-.5.5v5l.5.5h12l.5-.5v-5l-.5-.5H9.95a2.5 2.5 0 0 1-4.9 0zm9.163 1H13v4H2v-4h2.337a3.5 3.5 0 0 0 6.326 0M7 6h1v1H7zM7 8h1v1H7z" />
      </G>
    </Svg>
  );
};