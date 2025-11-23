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

export const CgComponents = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M7.757 6.343 12 2.1l4.243 4.243L12 10.586zm2.829 0L12 4.93l1.414 1.414L12 7.757zM2.1 12l4.243-4.243L10.586 12l-4.243 4.243zm2.829 0 1.414-1.414L7.757 12l-1.414 1.414zM13.414 12l4.243 4.243L21.9 12l-4.243-4.243zm4.243-1.414L16.243 12l1.414 1.414L19.07 12zM7.757 17.657 12 13.414l4.243 4.243L12 21.9zm2.829 0L12 16.243l1.414 1.414L12 19.07z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};