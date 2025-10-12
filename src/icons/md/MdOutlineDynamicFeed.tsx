

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineDynamicFeed = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
          <Path  d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
          <Path  d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
          <Path  d="M8,8H6v7c0,1.1,0.9,2,2,2h9v-2H8V8z" />
          <Path  d="M20,3h-8c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V5C22,3.9,21.1,3,20,3z M20,11h-8V7h8V11z" />
          <Path  d="M4,12H2v7c0,1.1,0.9,2,2,2h9v-2H4V12z" />
        </G>
      </Svg>
    );
  }

