

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPictureInPictureDuotone = (props: IconProps) => {

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
          <Path d="M224,64v64H136v72H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z" />
          <Path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H136a8,8,0,0,0-8,8v64H40ZM216,192H144V136h72v56Z" />
        </G>
      </Svg>
    );
  }

