

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoReloadSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M464,68.45V220a4,4,0,0,1-4,4H308.45a4,4,0,0,1-2.83-6.83L457.17,65.62A4,4,0,0,1,464,68.45Z" />
        </G>
      </Svg>
    );
  }

