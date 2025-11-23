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

export const HiFingerPrint = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M6.625 2.655A9 9 0 0 1 19 11a1 1 0 1 1-2 0 7 7 0 0 0-9.625-6.492 1 1 0 1 1-.75-1.853M4.662 4.959A1 1 0 0 1 4.75 6.37 6.97 6.97 0 0 0 3 11a1 1 0 1 1-2 0 8.97 8.97 0 0 1 2.25-5.953 1 1 0 0 1 1.412-.088" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M5 11a5 5 0 1 1 10 0 1 1 0 1 1-2 0 3 3 0 1 0-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 1 1-1.838-.789A10 10 0 0 0 5 11m8.921 2.012a1 1 0 0 1 .831 1.145 20 20 0 0 1-.545 2.436 1 1 0 1 1-1.92-.558q.311-1.07.49-2.192a1 1 0 0 1 1.144-.83z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M10 10a1 1 0 0 1 1 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 0 1-1.838-.789A13.95 13.95 0 0 0 9 11a1 1 0 0 1 1-1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};