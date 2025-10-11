

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaEnvelopeOpenSolid = (props: IconProps) => {

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
          <Path  d="M 16 3 L 15.46875 3.34375 L 3.46875 11.15625 L 3 11.46875 L 3 29 L 29 29 L 29 11.46875 L 28.53125 11.15625 L 16.53125 3.34375 Z M 16 5.375 L 26.1875 12 L 16 18.59375 L 5.8125 12 Z M 5 13.84375 L 15.46875 20.625 L 16 20.96875 L 16.53125 20.625 L 27 13.84375 L 27 27 L 5 27 Z" />
        </G>
      </Svg>
    );
  }

