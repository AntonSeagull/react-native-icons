

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiMobile3 = (props: IconProps) => {

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
          <Path  d="M16.73,2.065H7.27a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.46a2.386,2.386,0,0,0,2.24-2.5V4.565A2.386,2.386,0,0,0,16.73,2.065Zm1.24,17.37a1.391,1.391,0,0,1-1.24,1.5H7.27a1.391,1.391,0,0,1-1.24-1.5V4.565a1.391,1.391,0,0,1,1.24-1.5H8.8v.51a1,1,0,0,0,1,1h4.4a1,1,0,0,0,1-1v-.51h1.53a1.391,1.391,0,0,1,1.24,1.5Z" />
          <Path  d="M10,18.934h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z" />
        </G>
      </Svg>
    );
  }

