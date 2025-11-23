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

export const GiDesk = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M104.998 104.998v110.004h206.004V104.998zm288 112v46.004h30.004v-46.004zm-194.512 16-8.668 26.004h36.364l-8.668-26.004zm-157.488 44v18.004h430.004v-18.004zm14.004 36V496h17.996V371.729l58.73-58.731h-25.453l-33.277 33.277v-33.277zm289.996 0v46.004h94.004v-46.004zM394.271 320a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 328a10.272 8 0 0 1 10.271-8m-49.273 56.998v46.004h94.004v-46.004zM394.271 384a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 392a10.272 8 0 0 1 10.271-8m-49.273 56.998v46.004h94.004v-46.004zM394.271 448a10.272 8 0 0 1 10.272 8 10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 456a10.272 8 0 0 1 10.271-8" />
      </G>
    </Svg>
  );
};