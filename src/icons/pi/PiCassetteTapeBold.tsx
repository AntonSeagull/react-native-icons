

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCassetteTapeBold = (props: IconProps) => {

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
          <Path  d="M224,44H32A20,20,0,0,0,12,64V192a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V64A20,20,0,0,0,224,44Zm-4,144H183l-12.6-16.8A8,8,0,0,0,164,168H92a8,8,0,0,0-6.4,3.2L73,188H36V68H220ZM82,152h92a34,34,0,0,0,0-68H82a34,34,0,0,0,0,68Zm0-44a10,10,0,1,1-10,10A10,10,0,0,1,82,108Zm102,10a10,10,0,1,1-10-10A10,10,0,0,1,184,118Zm-42.5,10h-27a34.08,34.08,0,0,0,0-20h27a34.08,34.08,0,0,0,0,20Z" />
        </G>
      </Svg>
    );
  }

