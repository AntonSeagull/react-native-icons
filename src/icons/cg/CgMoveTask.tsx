

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMoveTask = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M18.9641 7H10.9641V9H18.9641V7Z" fill="currentColor" />
          <Path d="M6 8.82864V15.1714L9.9642 12L6 8.82864Z" fill="currentColor" />
          <Path d="M18.9641 11H10.9641V13H18.9641V11Z" fill="currentColor" />
          <Path d="M10.9641 15H18.9641V17H10.9641V15Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

