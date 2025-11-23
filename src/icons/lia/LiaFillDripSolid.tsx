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

export const LiaFillDripSolid = (props: IconProps) => {
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
        <Path d="M11.3 3.3 9.9 4.7l1.8 1.8-6.9 6.9a3.017 3.017 0 0 0 0 4.3l.1.1 6.3 6.3c1.2 1.2 3.1 1.2 4.3 0l7.6-7.6.7-.7-9.7-9.7-.8-.8-.2-.2zm1.8 4.6 7.9 7.9-2.2 2.2H7.899L6.2 16.3c-.4-.4-.4-1.1 0-1.5zM25 19.3l-.8 1.2s-.5.8-1.1 1.7c-.3.5-.5.9-.7 1.4s-.4.8-.4 1.4c0 1.6 1.4 3 3 3s3-1.4 3-3c0-.6-.2-1-.4-1.5s-.5-1-.7-1.4c-.5-.9-1.1-1.7-1.1-1.7z" />
      </G>
    </Svg>
  );
};