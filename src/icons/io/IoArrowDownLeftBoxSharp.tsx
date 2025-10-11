

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoArrowDownLeftBoxSharp = (props: IconProps) => {

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
          <Path d="M32 480L32 315.636L64 315.636L64 425.373L107.636 381.736L107.636 404.364L130.264 404.364L86.6275 448L196.364 448L196.364 480L32 480ZM318.628 216L130.264 404.364L480 404.364L480 32L107.636 31.9999L107.636 381.736L296 193.373L318.628 216Z" />
        </G>
      </Svg>
    );
  }

