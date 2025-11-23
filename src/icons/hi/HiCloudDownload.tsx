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

export const HiCloudDownload = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 0 0 5.5 13H9v2.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 1 0-.616-8.958 4.002 4.002 0 1 0-7.753 1.977A3.5 3.5 0 0 0 2 9.5m9 3.5H9V8a1 1 0 0 1 2 0z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};