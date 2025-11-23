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

export const RxKeyboard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M13.5 4h-12a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5m-12-1A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12h12a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 3zM2 5h1v1H2zm3 0H4v1h1zm1 0h1v1H6zm3 0H8v1h1zm1 0h1v1h-1zm3 0h-1v1h1zm-2 2h1v1h-1zm2 2h-1v1h1zM9 7h1v1H9zM8 7H7v1h1zM5 7h1v1H5zM4 7H3v1h1zM2 9h1v1H2zm9 0H4v1h7z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};