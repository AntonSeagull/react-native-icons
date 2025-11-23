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

export const TfiBriefcase = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7 13v-1.5h1v.5h1v-.5h1V13zm10-2h-1v6H1v-6H0V3h3.616C4.554 1.17 6.421 0 8.5 0s3.947 1.171 4.884 3H17zM4.769 3h7.464c-.825-1.233-2.21-2-3.732-2s-2.907.768-3.732 2M15 11H2v5h13zm1-7H1v6h15z" />
      </G>
    </Svg>
  );
};