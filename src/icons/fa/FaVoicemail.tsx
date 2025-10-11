

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FaVoicemail = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 640 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M496 128a144 144 0 0 0-119.74 224H263.74A144 144 0 1 0 144 416h352a144 144 0 0 0 0-288zM64 272a80 80 0 1 1 80 80 80 80 0 0 1-80-80zm432 80a80 80 0 1 1 80-80 80 80 0 0 1-80 80z" />
        </G>
      </Svg>
    );
  }

