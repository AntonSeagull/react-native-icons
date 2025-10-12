

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoApps = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z" />
          <Path  d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z" />
          <Path  d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z" />
          <Path  d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z" />
          <Path  d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z" />
          <Path  d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z" />
          <Path  d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z" />
          <Path  d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z" />
          <Path  d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z" />
        </G>
      </Svg>
    );
  }

