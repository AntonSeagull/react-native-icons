

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFlagAlt = (props: IconProps) => {

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
          <Path  d="M15 0v17h-1v-17h1zM1.527 0.976h11.473v8h-11.49l2.911-3.952-2.894-4.048zM12 1.976h-8.528l2.185 3.056-2.168 2.944h8.511v-6z" />
        </G>
      </Svg>
    );
  }

