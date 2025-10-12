

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imalizer = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M7 2v-0.25c0-0.413-0.338-0.75-0.75-0.75h-2.5c-0.413 0-0.75 0.337-0.75 0.75v0.25h-3v2h3v0.25c0 0.412 0.337 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-0.25h9v-2h-9zM4 4v-2h2v2h-2zM13 6.75c0-0.412-0.338-0.75-0.75-0.75h-2.5c-0.412 0-0.75 0.338-0.75 0.75v0.25h-9v2h9v0.25c0 0.412 0.338 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-0.25h3v-2h-3v-0.25zM10 9v-2h2v2h-2zM7 11.75c0-0.412-0.338-0.75-0.75-0.75h-2.5c-0.413 0-0.75 0.338-0.75 0.75v0.25h-3v2h3v0.25c0 0.412 0.337 0.75 0.75 0.75h2.5c0.412 0 0.75-0.338 0.75-0.75v-0.25h9v-2h-9v-0.25zM4 14v-2h2v2h-2z" />
        </G>
      </Svg>
    );
  }

