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

export const CgBackspace = (props: IconProps) => {
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
        <Path fill="currentColor" d="m17.743 8.464 1.414 1.415L17.036 12l2.121 2.121-1.414 1.415-2.122-2.122-2.121 2.122-1.414-1.415L14.207 12l-2.121-2.121L13.5 8.465l2.121 2.12z" />
        <Path fill="currentColor" fillRule="evenodd" d="m8.586 19-6.293-6.293a1 1 0 0 1 0-1.414L8.586 5h14v14zm.828-12-5 5 5 5h11.172V7z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};