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

export const TfiMicrosoft = (props: IconProps) => {
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
        <Path d="M7.734 15.723 17 17V8.97H7.734zm1-5.753H16v5.883l-7.266-1.002zM0 14.661l6.967.959V8.97H0zM1 9.97h4.967v4.503L1 13.789zM0 8.112h6.967V1.38L0 2.339zM1 3.21l4.967-.684v4.585H1zm6.734-1.933v6.835H17V0zM16 7.112H8.734V2.149L16 1.147z" />
      </G>
    </Svg>
  );
};