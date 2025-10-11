

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaGenderlessSolid = (props: IconProps) => {

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
          <Path  d="M 16 4 C 11.59375 4 8 7.59375 8 12 C 8 16.066406 11.066406 19.4375 15 19.9375 L 15 28 L 17 28 L 17 19.9375 C 20.933594 19.4375 24 16.066406 24 12 C 24 7.59375 20.40625 4 16 4 Z M 16 6 C 19.324219 6 22 8.675781 22 12 C 22 15.324219 19.324219 18 16 18 C 12.675781 18 10 15.324219 10 12 C 10 8.675781 12.675781 6 16 6 Z" />
        </G>
      </Svg>
    );
  }

