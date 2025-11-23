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

export const LiaTrashAltSolid = (props: IconProps) => {
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
        <Path d="M15 4c-.523 0-1.059.184-1.437.563C13.183 4.94 13 5.477 13 6v1H7v2h1v16c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V9h1V7h-6V6c0-.523-.184-1.059-.562-1.437C20.058 4.183 19.523 4 19 4Zm0 2h4v1h-4Zm-5 3h14v16c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1Zm2 3v11h2V12Zm4 0v11h2V12Zm4 0v11h2V12Z" />
      </G>
    </Svg>
  );
};