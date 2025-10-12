

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiRuler = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M5 0v17h7v-17h-7zM11 16h-5v-0.984h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-0.984h1v-1h-1v-1h2v-1h-2v-1.016h1v-1h-1v-1h2v-1h-2v-1h5v15z" />
        </G>
      </Svg>
    );
  }

