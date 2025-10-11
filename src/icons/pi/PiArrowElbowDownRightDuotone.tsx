

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowDownRightDuotone = (props: IconProps) => {

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
          <Path d="M216,176l-48,48V128Z" />
          <Path d="M221.66,170.34l-48-48A8,8,0,0,0,160,128v40H80V32a8,8,0,0,0-16,0V176a8,8,0,0,0,8,8h88v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,221.66,170.34ZM176,204.69V147.31L204.69,176Z" />
        </G>
      </Svg>
    );
  }

