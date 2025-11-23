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

export const VscGithubProject = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M6 13h1V7h6V6H7V3H6v3H3v1h3z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M2.5 2h11l.5.5v11l-.5.5h-11l-.5-.5v-11zM3 13h10V3H3z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};