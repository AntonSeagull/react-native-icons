

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiShare = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M384 64a64 64 0 0 0-64 64 64 64 0 0 0 1.1 11.3l-146.3 73.2A64 64 0 0 0 128 192a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 46.8-20.5L321 372.7a64 64 0 0 0-1 11.3 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64 64 64 0 0 0-46.8 20.5L191 267.4a64 64 0 0 0 1-11.4 64 64 0 0 0-1.1-11.4l146.3-73.1A64 64 0 0 0 384 192a64 64 0 0 0 64-64 64 64 0 0 0-64-64z" fill="#000" />
        </G>
      </Svg>
    );
  }

