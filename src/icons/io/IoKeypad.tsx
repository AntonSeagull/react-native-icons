

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoKeypad = (props: IconProps) => {

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
          <Path  d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
          <Path  d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
        </G>
      </Svg>
    );
  }

