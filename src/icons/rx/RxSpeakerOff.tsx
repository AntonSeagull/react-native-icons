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

export const RxSpeakerOff = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M7.724 1.053A.5.5 0 0 1 8 1.5v12a.5.5 0 0 1-.8.4L3.333 11H1.5A1.5 1.5 0 0 1 0 9.5v-4A1.5 1.5 0 0 1 1.5 4h1.833L7.2 1.1a.5.5 0 0 1 .524-.047M7 2.5 3.8 4.9a.5.5 0 0 1-.3.1h-2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 .3.1L7 12.5zm7.854 2.646a.5.5 0 0 1 0 .708L13.207 7.5l1.647 1.646a.5.5 0 0 1-.708.708L12.5 8.207l-1.646 1.647a.5.5 0 0 1-.708-.708L11.793 7.5l-1.647-1.646a.5.5 0 0 1 .708-.708L12.5 6.793l1.646-1.647a.5.5 0 0 1 .708 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};