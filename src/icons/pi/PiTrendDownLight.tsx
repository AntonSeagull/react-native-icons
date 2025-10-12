

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrendDownLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M238,128v64a6,6,0,0,1-6,6H168a6,6,0,0,1,0-12h49.52L136,104.49l-35.76,35.75a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L96,127.51l35.76-35.75a6,6,0,0,1,8.48,0L226,177.52V128a6,6,0,0,1,12,0Z" />
        </G>
      </Svg>
    );
  }

