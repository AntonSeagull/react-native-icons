

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiShuffleSimpleLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M214,48V88a6,6,0,0,1-12,0V62.48l-47.13,47.14a6,6,0,0,1-8.49-8.49L193.52,54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48Zm-6,114a6,6,0,0,0-6,6v25.52L52.24,43.76a6,6,0,0,0-8.48,8.48L193.52,202H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM101.13,146.38,43.76,203.76a6,6,0,1,0,8.48,8.48l57.38-57.37a6,6,0,0,0-8.49-8.49Z" />
        </G>
      </Svg>
    );
  }

