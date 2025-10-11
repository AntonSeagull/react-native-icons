

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiMemoPad = (props: IconProps) => {

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
          <Path  d="M17.44,2.065H6.56a2.507,2.507,0,0,0-2.5,2.5v14.87a2.507,2.507,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V4.565A2.5,2.5,0,0,0,17.44,2.065Zm1.5,17.37a1.5,1.5,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6.505H18.94Z" />
          <Path  d="M7.549,9.506h0a.5.5,0,0,1,0-1h8.909a.5.5,0,0,1,0,1Z" />
          <Path  d="M7.549,12.506h0a.5.5,0,0,1,0-1h6.5a.5.5,0,0,1,0,1Z" />
          <Path  d="M7.566,18.374h0a.5.5,0,1,1,0-1h3.251a.5.5,0,0,1,0,1Z" />
        </G>
      </Svg>
    );
  }

