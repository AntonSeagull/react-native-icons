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

export const BiLogoMediumOld = (props: IconProps) => {
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
        <Path d="M21.957 6.73a.073.073 0 0 0-.019-.097q-.006-.006-.012-.01l-.006-.002-6.033-3.018a.7.7 0 0 0-.292-.067.69.69 0 0 0-.586.317l-3.474 5.646 4.359 7.083zm-1.064 13.543c.611.306 1.107.092 1.107-.478V8.483l-5.809 9.439zM9.622 8.213v6.426l5.711 2.855zm-7.068 9.558 5.19 2.595a.85.85 0 0 0 .374.098c.323 0 .549-.25.549-.669V6.701a.07.07 0 0 0-.035-.059L2.739 3.697a.7.7 0 0 0-.3-.079c-.258 0-.439.199-.439.534v12.723c0 .341.25.744.554.896" />
      </G>
    </Svg>
  );
};