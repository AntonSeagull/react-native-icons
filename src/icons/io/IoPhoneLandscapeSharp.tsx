

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPhoneLandscapeSharp = (props: IconProps) => {

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
          <Path  d="M0,130V382a18,18,0,0,0,18,18H494a18,18,0,0,0,18-18V130a18,18,0,0,0-18-18H18A18,18,0,0,0,0,130ZM448,364H64V148H448Z" />
        </G>
      </Svg>
    );
  }

