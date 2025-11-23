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

export const TbBrandAngularFilled = (props: IconProps) => {
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
        <Path d="m12.665 2.174 7.4 2.612a2 2 0 0 1 1.316 2.156l-1.323 9.703a2 2 0 0 1-.99 1.468l-6.076 3.471a2 2 0 0 1-1.984 0l-6.076-3.47a2 2 0 0 1-.96-1.3l-.03-.167L2.62 6.943a2 2 0 0 1 1.316-2.156l7.4-2.613a2 2 0 0 1 1.33 0m.271 4.475c-.324-.865-1.548-.865-1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111.035a1 1 0 0 0 1.176-.62L10.443 14h3.113l.508 1.352a1 1 0 0 0 1.176.62l.111-.035a1 1 0 0 0 .585-1.287zM12 9.848l.807 2.151h-1.614z" />
      </G>
    </Svg>
  );
};