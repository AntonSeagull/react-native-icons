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

export const PiPencilSlashThin = (props: IconProps) => {
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
        <Path d="M51 37.31a4 4 0 0 0-6 5.38l50.81 55.85-56.3 56.29a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h44.69a11.93 11.93 0 0 0 8.48-3.51l53.36-53.36L205 218.69a4 4 0 1 0 5.92-5.38Zm71.52 90.56L68 182.34 45.66 160l55.54-55.54ZM44 208v-38.34L86.34 212H48a4 4 0 0 1-4-4m52 2.34L73.66 188l54.2-54.21 21.28 23.41ZM224.49 76.2 179.8 31.52a12 12 0 0 0-17 0l-41.64 41.67a4 4 0 0 0 5.66 5.65l9.18-9.18L158.35 92l-10.52 10.52a4 4 0 1 0 5.65 5.66L164 97.66 186.35 120l-11.85 11.85a4 4 0 1 0 5.65 5.66l44.34-44.34a12 12 0 0 0 0-16.97m-5.66 11.31L192 114.34 141.66 64l26.83-26.83a4.1 4.1 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65" />
      </G>
    </Svg>
  );
};