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

export const PiFilmSlateThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M216 108H71.26L209 71.64a4 4 0 0 0 2.84-4.92l-8.16-30a11.92 11.92 0 0 0-14.54-8.31L36.83 68.61a11.78 11.78 0 0 0-7.26 5.53A11.6 11.6 0 0 0 28.41 83l7.67 28.19a4 4 0 0 0-.08.81v88a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-88a4 4 0 0 0-4-4m-90-54.67 38 21.92-47.92 12.65L78.12 66Zm65.16-17.2a4 4 0 0 1 1-.13 3.88 3.88 0 0 1 3.84 2.81l7.1 26.12-28.1 7.42-38-21.92Zm-154.7 42a3.86 3.86 0 0 1 2.37-1.8l28.27-7.46 38 21.91-61.85 16.34-7.12-26.18a3.66 3.66 0 0 1 .37-2.8ZM212 200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-84h168Z" />
      </G>
    </Svg>
  );
};