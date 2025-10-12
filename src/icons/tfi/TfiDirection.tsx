

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiDirection = (props: IconProps) => {

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
          <Path  d="M16.641 5.409l-2.811-3.409h-4.83v-2h-1v2h-7v7h7v8h1v-8h4.838l2.803-3.591zM9 8h-7v-5h11.358l2.001 2.426-2.009 2.574h-4.35z" />
        </G>
      </Svg>
    );
  }

