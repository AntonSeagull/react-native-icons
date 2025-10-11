

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaBackspaceSolid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 11.59375 7 L 11.28125 7.28125 L 3.28125 15.28125 L 2.59375 16 L 3.28125 16.71875 L 11.28125 24.71875 L 11.59375 25 L 29 25 L 29 7 Z M 12.4375 9 L 27 9 L 27 23 L 12.4375 23 L 5.4375 16 Z M 15.15625 11.75 L 13.75 13.15625 L 16.59375 16 L 13.75 18.84375 L 15.15625 20.25 L 18 17.40625 L 20.84375 20.25 L 22.25 18.84375 L 19.40625 16 L 22.25 13.15625 L 20.84375 11.75 L 18 14.59375 Z" />
        </G>
      </Svg>
    );
  }

