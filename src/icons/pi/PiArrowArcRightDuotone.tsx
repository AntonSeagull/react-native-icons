

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowArcRightDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M232,88v64H168Z" />
          <Path d="M235.06,80.61a8,8,0,0,0-8.72,1.73l-26.48,26.49A104,104,0,0,0,24,184a8,8,0,0,0,16,0,88,88,0,0,1,148.53-63.84l-26.19,26.18A8,8,0,0,0,168,160h64a8,8,0,0,0,8-8V88A8,8,0,0,0,235.06,80.61ZM224,144H187.31L224,107.31Z" />
        </G>
      </Svg>
    );
  }

