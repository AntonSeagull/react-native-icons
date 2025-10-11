

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiVoicemailBold = (props: IconProps) => {

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
          <Path d="M196,68a60,60,0,0,0-48,96H108a60,60,0,1,0-48,24H196a60,60,0,0,0,0-120ZM24,128a36,36,0,1,1,36,36A36,36,0,0,1,24,128Zm172,36a36,36,0,1,1,36-36A36,36,0,0,1,196,164Z" />
        </G>
      </Svg>
    );
  }

