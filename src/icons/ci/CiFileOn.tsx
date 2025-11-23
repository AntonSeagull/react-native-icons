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

export const CiFileOn = (props: IconProps) => {
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
        <Path d="m19.485 7.35-4.97-4.86a1.47 1.47 0 0 0-1.05-.43h-6.9a2.5 2.5 0 0 0-2.5 2.5v14.88a2.507 2.507 0 0 0 2.5 2.5h10.87a2.507 2.507 0 0 0 2.5-2.5V8.42a1.5 1.5 0 0 0-.45-1.07m-1.27.15h-2.34a1.5 1.5 0 0 1-1.5-1.5V3.75Zm.72 11.94a1.5 1.5 0 0 1-1.5 1.5H6.565a1.5 1.5 0 0 1-1.5-1.5V4.56a1.5 1.5 0 0 1 1.5-1.5h6.81V6a2.5 2.5 0 0 0 2.5 2.5h3.06Z" data-name="File On" />
      </G>
    </Svg>
  );
};